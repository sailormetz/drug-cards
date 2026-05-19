const { createClient } = require('@supabase/supabase-js');

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing bearer token' });

  const { data: userData, error: userErr } = await supabaseAdmin.auth.getUser(token);
  if (userErr || !userData?.user) return res.status(401).json({ error: 'Invalid session' });
  const user = userData.user;

  const rawCode = (req.body && req.body.code) || '';
  const code = String(rawCode).trim();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  // Already-paid users don't burn codes.
  const { data: existing, error: entErr } = await supabaseAdmin
    .from('entitlements')
    .select('has_paid')
    .eq('user_id', user.id)
    .maybeSingle();
  if (entErr) {
    console.error('entitlement lookup failed:', entErr);
    return res.status(500).json({ error: 'Lookup failed' });
  }
  if (existing && existing.has_paid) {
    return res.status(409).json({ error: 'already_paid' });
  }

  // Atomic claim: a single UPDATE gated on `used = false` is race-safe in Postgres.
  const nowIso = new Date().toISOString();
  const { data: claimed, error: claimErr } = await supabaseAdmin
    .from('access_codes')
    .update({ used: true, used_by: user.id, used_at: nowIso })
    .eq('code', code)
    .eq('used', false)
    .select()
    .maybeSingle();
  if (claimErr) {
    console.error('code claim failed:', claimErr);
    return res.status(500).json({ error: 'Claim failed' });
  }
  if (!claimed) {
    return res.status(404).json({ error: 'invalid_code' });
  }

  const { error: upsertErr } = await supabaseAdmin.from('entitlements').upsert(
    {
      user_id: user.id,
      has_paid: true,
      paid_at: nowIso,
      updated_at: nowIso,
    },
    { onConflict: 'user_id' }
  );
  if (upsertErr) {
    console.error('entitlement upsert failed:', upsertErr);
    return res.status(500).json({ error: 'DB write failed' });
  }

  return res.status(200).json({ ok: true });
};
