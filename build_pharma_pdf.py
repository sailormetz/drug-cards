"""
Paramedic Pharmacology Study Guide — iPhone-sized PDF (390x844pt per page)
Each drug card = one page. Dark theme with color-coded sections.
Sections are sized to fill the entire 844pt height evenly.
"""
import urllib.request
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics

# ─── FONTS ───
FONT_DIR = Path("/tmp/fonts")
FONT_DIR.mkdir(exist_ok=True)

fonts = {
    "Inter": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.ttf",
    "Inter-Bold": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hjQ.ttf",
    "Inter-ExtraBold": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuDyYAZ9hjQ.ttf",
    "Inter-SemiBold": "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYAZ9hjQ.ttf",
    "Inter-Medium": "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
    "JetBrainsMono": "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.ttf",
}
for name, url in fonts.items():
    p = FONT_DIR / f"{name}.ttf"
    if not p.exists():
        urllib.request.urlretrieve(url, p)
    pdfmetrics.registerFont(TTFont(name, str(p)))

# ─── COLORS ───
BG       = HexColor("#0d1117")
SURFACE  = HexColor("#151b23")
SURFACE2 = HexColor("#1c2333")
BORDER   = HexColor("#2a3444")
TEXT     = HexColor("#e6edf3")
TEXT_MUT = HexColor("#8b949e")
TEXT_FAINT = HexColor("#484f58")
WHITE    = HexColor("#ffffff")
GREEN    = HexColor("#3fb950")
RED      = HexColor("#f85149")
BLUE     = HexColor("#58a6ff")
ORANGE   = HexColor("#d29922")
CYAN     = HexColor("#56d4dd")
ALPHA_C  = HexColor("#f0883e")

W, H = 390, 844
MARGIN = 14
CARD_W = W - 2 * MARGIN

# ─── HELPERS ───
def draw_rounded_rect(c, x, y, w, h, r=8, fill=SURFACE, stroke=BORDER):
    by = y - h
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.5)
    c.roundRect(x, by, w, h, r, fill=1, stroke=1)

def draw_pill(c, x, y, text, font="JetBrainsMono", size=9, text_color=TEXT,
              bg=SURFACE2, border=BORDER, pad_h=10, pad_v=3):
    c.setFont(font, size)
    tw = c.stringWidth(text, font, size)
    pw = tw + pad_h * 2
    ph = size + pad_v * 2
    bx = x
    by = y - pad_v - 1
    c.setFillColor(bg)
    c.setStrokeColor(border)
    c.setLineWidth(0.5)
    c.roundRect(bx, by, pw, ph, ph / 2, fill=1, stroke=1)
    c.setFillColor(text_color)
    c.drawString(bx + pad_h, y, text)
    return pw

def draw_text(c, x, y, text, font="Inter", size=11, color=TEXT):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString(x, y, text)

def draw_text_centered(c, cx, y, text, font="Inter", size=11, color=TEXT):
    c.setFont(font, size)
    c.setFillColor(color)
    tw = c.stringWidth(text, font, size)
    c.drawString(cx - tw / 2, y, text)

def draw_section_label(c, x, y, text, color=BLUE):
    c.setFont("Inter-Bold", 10)
    c.setFillColor(color)
    c.drawString(x, y, text.upper())

def draw_bullet(c, x, y, text, color=GREEN, shape="circle", size=11):
    if shape == "circle":
        c.setFillColor(color)
        c.circle(x + 3.5, y + 3, 3.5, fill=1, stroke=0)
    else:
        c.setFillColor(color)
        c.saveState()
        c.translate(x + 3, y + 3)
        c.rotate(45)
        c.rect(-2.5, -2.5, 5, 5, fill=1, stroke=0)
        c.restoreState()
    draw_text(c, x + 14, y, text, size=size)

def draw_adverse_pill(c, x, y, text):
    font = "Inter-Medium"
    size = 8
    c.setFont(font, size)
    tw = c.stringWidth(text, font, size)
    pw = tw + 12
    ph = size + 6
    c.setFillColor(SURFACE2)
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.roundRect(x, y - 2, pw, ph, ph / 2, fill=1, stroke=1)
    c.setFillColor(TEXT)
    c.drawString(x + 6, y + 1, text)
    return pw

def wrap_text(c, text, font, size, max_w):
    c.setFont(font, size)
    words = text.split()
    lines, current = [], ""
    for w in words:
        test = current + " " + w if current else w
        if c.stringWidth(test, font, size) < max_w:
            current = test
        else:
            lines.append(current)
            current = w
    if current:
        lines.append(current)
    return lines


def distribute_heights(base_heights, available, gap):
    """Distribute available height across sections with gaps between them.
    Returns adjusted heights list."""
    total_base = sum(base_heights) + gap * (len(base_heights) - 1)
    extra = available - total_base
    if extra <= 0:
        return base_heights
    # Distribute extra proportionally, favoring larger sections
    total_weight = sum(base_heights)
    return [h + extra * (h / total_weight) for h in base_heights]


# ═══════════════════════════════════════════════════════════
# PAGE 1: EPINEPHRINE
# ═══════════════════════════════════════════════════════════
def draw_epinephrine(c):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    
    top_pad = 14
    footer_h = 28
    gap = 7
    available = H - top_pad - footer_h
    
    # Base content heights (minimum needed)
    base = [90, 60, 112, 145, 120]  # header, moa, ind, dose, adverse
    heights = distribute_heights(base, available, gap)
    header_h, moa_h, ind_h, dose_h, adv_h = [int(h) for h in heights]
    
    col_w = (CARD_W - gap) / 2
    cx_start = MARGIN + col_w + gap
    cursor_y = H - top_pad
    
    # ── HEADER ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, header_h, r=10)
    mid_y = cursor_y - header_h * 0.33
    draw_text_centered(c, W/2, mid_y, "Epinephrine", "Inter-ExtraBold", 28, WHITE)
    draw_text_centered(c, W/2, mid_y - 16, "1:1,000  ·  1 mg/mL", "JetBrainsMono", 10, TEXT_MUT)
    
    pill_text = ["SYMPATHOMIMETIC", "CATECHOLAMINE"]
    total_pw = sum(c.stringWidth(t, "Inter-SemiBold", 8) + 20 for t in pill_text) + 6
    px = W/2 - total_pw/2
    py = cursor_y - header_h + 14
    for t in pill_text:
        pw = draw_pill(c, px, py, t, "Inter-SemiBold", 8, TEXT,
                       HexColor("#0e1b2e"), HexColor("#253a5e"), 10, 3)
        px += pw + 6
    cursor_y -= header_h + gap
    
    # ── MECHANISM OF ACTION ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, moa_h)
    bx = MARGIN + 10
    by = cursor_y - 18
    draw_section_label(c, bx, by, "Mechanism of Action", BLUE)
    
    ry = by - 18
    pw = draw_pill(c, bx, ry, "a-1", "JetBrainsMono", 9, ALPHA_C,
                   HexColor("#1e1510"), HexColor("#3d2a1a"), 6, 2)
    draw_text(c, bx + pw + 5, ry, "->", "Inter", 10, TEXT_MUT)
    draw_text(c, bx + pw + 19, ry, "Vasoconstriction", "Inter", 10, TEXT)
    
    rx = W/2 + 8
    pw2 = draw_pill(c, rx, ry, "b-1", "JetBrainsMono", 9, BLUE,
                    HexColor("#0e1625"), HexColor("#1e3050"), 6, 2)
    draw_text(c, rx + pw2 + 5, ry, "->", "Inter", 10, TEXT_MUT)
    draw_text(c, rx + pw2 + 19, ry, "^ HR & contractility", "Inter", 10, TEXT)
    
    ry2 = ry - 17
    pw3 = draw_pill(c, bx, ry2, "b-2", "JetBrainsMono", 9, BLUE,
                    HexColor("#0e1625"), HexColor("#1e3050"), 6, 2)
    draw_text(c, bx + pw3 + 5, ry2, "->", "Inter", 10, TEXT_MUT)
    draw_text(c, bx + pw3 + 19, ry2, "Bronchodilation", "Inter", 10, TEXT)
    cursor_y -= moa_h + gap
    
    # ── INDICATIONS / CONTRAINDICATIONS ──
    draw_rounded_rect(c, MARGIN, cursor_y, col_w, ind_h)
    ix = MARGIN + 10
    iy = cursor_y - 20
    draw_section_label(c, ix, iy, "Indications", GREEN)
    line_gap = (ind_h - 40) / 4  # evenly space 4 items
    for i, txt in enumerate(["Anaphylaxis", "Severe Allergic Rxn", "Refractory Bronchospasm", "Asthma (refractory)"]):
        draw_bullet(c, ix, iy - 18 - i * line_gap, txt, GREEN, size=10.5)
    
    draw_rounded_rect(c, cx_start, cursor_y, col_w, ind_h)
    cix = cx_start + 10
    ciy = cursor_y - 20
    draw_section_label(c, cix, ciy, "Contraindications", RED)
    contras = ["Hypersensitivity", "Hypovolemic Shock", "Coronary insuff.", "Hypertension"]
    relatives = [False, False, True, True]
    for i, (txt, rel) in enumerate(zip(contras, relatives)):
        row_y = ciy - 18 - i * line_gap
        draw_bullet(c, cix, row_y, txt, RED, "diamond", size=10.5)
        if rel:
            tw = c.stringWidth(txt, "Inter", 10.5)
            draw_pill(c, cix + 14 + tw + 3, row_y, "REL", "Inter-Bold", 6,
                      ORANGE, HexColor("#1a1508"), HexColor("#3d3010"), 3, 1)
    cursor_y -= ind_h + gap
    
    # ── DOSE & ROUTE ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, dose_h)
    dx = MARGIN + 10
    dy = cursor_y - 18
    draw_section_label(c, dx, dy, "Dose & Route", BLUE)
    
    ady = dy - 20
    draw_text(c, dx, ady, "ADULT", "Inter-Bold", 9, CYAN)
    draw_text(c, dx, ady - 16, "0.3-0.5 mg IM", "Inter-Bold", 12, WHITE)
    draw_text(c, dx, ady - 30, "Lateral thigh", "Inter", 10, TEXT_MUT)
    draw_text(c, dx, ady - 44, "Repeat every 5-15 min", "Inter", 10, TEXT_MUT)
    
    pdx = W/2 + 8
    draw_text(c, pdx, ady, "PEDIATRIC", "Inter-Bold", 9, CYAN)
    draw_text(c, pdx, ady - 16, "0.01 mg/kg IM", "Inter-Bold", 12, WHITE)
    draw_text(c, pdx, ady - 30, "Max 0.3 mg", "Inter", 10, TEXT_MUT)
    draw_text(c, pdx, ady - 44, "Lateral thigh", "Inter", 10, TEXT_MUT)
    
    div_y = ady - 60
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(dx, div_y, MARGIN + CARD_W - 10, div_y)
    
    asy = div_y - 16
    draw_text(c, dx, asy, "ASTHMA", "Inter-Bold", 9, CYAN)
    draw_text(c, dx + 55, asy, "0.3-0.5 mg SQ", "Inter-Bold", 12, WHITE)
    
    oy = asy - 20
    draw_text(c, dx, oy, "Onset", "Inter", 10, TEXT_MUT)
    draw_text(c, dx + 32, oy, "1-2 min", "JetBrainsMono", 10, TEXT)
    draw_text(c, dx + 90, oy, "·", "Inter", 10, TEXT_FAINT)
    draw_text(c, dx + 100, oy, "Duration", "Inter", 10, TEXT_MUT)
    draw_text(c, dx + 148, oy, "5-15 min", "JetBrainsMono", 10, TEXT)
    cursor_y -= dose_h + gap
    
    # ── ADVERSE EFFECTS / PRECAUTIONS ──
    draw_rounded_rect(c, MARGIN, cursor_y, col_w, adv_h)
    ax = MARGIN + 10
    ay = cursor_y - 18
    draw_section_label(c, ax, ay, "Adverse Effects", ORANGE)
    
    # Two columns of pills
    pills_col1 = ["Tachycardia", "Dysrhythmias", "Pallor", "Angina"]
    pills_col2 = ["Hypertension", "Anxiety/Tremor", "Headache"]
    py1 = ay - 20
    pill_gap_v = 18
    for t in pills_col1:
        draw_adverse_pill(c, ax, py1, t)
        py1 -= pill_gap_v
    px2 = ax + 78
    py2 = ay - 20
    for t in pills_col2:
        draw_adverse_pill(c, px2, py2, t)
        py2 -= pill_gap_v
    
    draw_rounded_rect(c, cx_start, cursor_y, col_w, adv_h)
    prx = cx_start + 10
    pry = cursor_y - 18
    draw_section_label(c, prx, pry, "Precautions", ORANGE)
    
    max_w = col_w - 20
    pty = pry - 16
    lines = wrap_text(c, "Use caution in elderly, known cardiac disease, HTN, and diabetes. May precipitate angina or MI in susceptible patients.", "Inter", 10.5, max_w)
    for i, line in enumerate(lines):
        draw_text(c, prx, pty - i * 15, line, "Inter", 10.5, TEXT)
    
    # ── FOOTER ──
    draw_text_centered(c, W/2, 18, "ALWAYS FOLLOW YOUR LOCAL PROTOCOL  ·  FOR EDUCATIONAL USE ONLY",
                       "Inter-Medium", 6.5, TEXT_FAINT)
    draw_text_centered(c, W/2, 9, "Created with Perplexity Computer", "Inter", 6.5, TEXT_FAINT)


# ═══════════════════════════════════════════════════════════
# PAGE 2: ETOMIDATE
# ═══════════════════════════════════════════════════════════
def draw_etomidate(c):
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    
    top_pad = 14
    footer_h = 28
    gap = 7
    available = H - top_pad - footer_h
    
    # Etomidate has fewer items — adjust base sizes
    base = [90, 55, 80, 130, 130]  # header, moa, ind, dose, adverse
    heights = distribute_heights(base, available, gap)
    header_h, moa_h, ind_h, dose_h, adv_h = [int(h) for h in heights]
    
    col_w = (CARD_W - gap) / 2
    cx_start = MARGIN + col_w + gap
    cursor_y = H - top_pad
    
    # ── HEADER ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, header_h, r=10)
    mid_y = cursor_y - header_h * 0.33
    draw_text_centered(c, W/2, mid_y, "Etomidate", "Inter-ExtraBold", 28, WHITE)
    draw_text_centered(c, W/2, mid_y - 16, "2 mg/mL", "JetBrainsMono", 10, TEXT_MUT)
    
    pill_text = ["ANESTHETIC", "SEDATIVE"]
    total_pw = sum(c.stringWidth(t, "Inter-SemiBold", 8) + 20 for t in pill_text) + 6
    px = W/2 - total_pw/2
    py = cursor_y - header_h + 14
    for t in pill_text:
        pw = draw_pill(c, px, py, t, "Inter-SemiBold", 8, TEXT,
                       HexColor("#0e1b2e"), HexColor("#253a5e"), 10, 3)
        px += pw + 6
    cursor_y -= header_h + gap
    
    # ── MOA ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, moa_h)
    bx = MARGIN + 10
    by = cursor_y - 20
    draw_section_label(c, bx, by, "Mechanism of Action", BLUE)
    
    ry = by - 20
    draw_text(c, bx, ry, "Enhances", "Inter", 10.5, TEXT)
    gx = bx + c.stringWidth("Enhances ", "Inter", 10.5)
    pw = draw_pill(c, gx, ry, "GABA-A", "JetBrainsMono", 9, BLUE,
                   HexColor("#0e1625"), HexColor("#1e3050"), 6, 2)
    draw_text(c, gx + pw + 4, ry, "activity -> neuronal inhibition", "Inter", 10.5, TEXT)
    
    ry2 = ry - 18
    draw_text(c, bx, ry2, "->", "Inter", 10.5, TEXT_MUT)
    draw_text(c, bx + 16, ry2, "rapid sedation & unconsciousness", "Inter-Bold", 10.5, WHITE)
    cursor_y -= moa_h + gap
    
    # ── INDICATIONS / CONTRAINDICATIONS ──
    draw_rounded_rect(c, MARGIN, cursor_y, col_w, ind_h)
    ix = MARGIN + 10
    iy = cursor_y - 20
    draw_section_label(c, ix, iy, "Indications", GREEN)
    ind_line_gap = (ind_h - 40) / 2
    for i, txt in enumerate(["Procedural Sedation", "RSI Induction"]):
        draw_bullet(c, ix, iy - 20 - i * ind_line_gap, txt, GREEN, size=10.5)
    
    draw_rounded_rect(c, cx_start, cursor_y, col_w, ind_h)
    cix = cx_start + 10
    ciy = cursor_y - 20
    draw_section_label(c, cix, ciy, "Contraindications", RED)
    for i, txt in enumerate(["Hypersensitivity", "Labor & Delivery"]):
        draw_bullet(c, cix, ciy - 20 - i * ind_line_gap, txt, RED, "diamond", size=10.5)
    cursor_y -= ind_h + gap
    
    # ── DOSE & ROUTE ──
    draw_rounded_rect(c, MARGIN, cursor_y, CARD_W, dose_h)
    dx = MARGIN + 10
    dy = cursor_y - 18
    draw_section_label(c, dx, dy, "Dose & Route", BLUE)
    
    ady = dy - 22
    draw_text(c, dx, ady, "ADULT", "Inter-Bold", 9, CYAN)
    draw_text(c, dx, ady - 16, "0.2-0.6 mg/kg IV/IO", "Inter-Bold", 12, WHITE)
    draw_text(c, dx, ady - 32, "Slow bolus + NS flush", "Inter", 10, TEXT_MUT)
    draw_text(c, dx, ady - 46, "Max 40 mg", "Inter", 10, TEXT_MUT)
    
    pdx = W/2 + 8
    draw_text(c, pdx, ady, "PEDIATRIC", "Inter-Bold", 9, CYAN)
    draw_text(c, pdx, ady - 16, "0.1-0.4 mg/kg IV/IO", "Inter-Bold", 12, WHITE)
    draw_text(c, pdx, ady - 32, "Slow bolus + NS flush", "Inter", 10, TEXT_MUT)
    draw_text(c, pdx, ady - 46, "Max 20 mg", "Inter", 10, TEXT_MUT)
    
    div_y = ady - 64
    c.setStrokeColor(BORDER)
    c.setLineWidth(0.5)
    c.line(dx, div_y, MARGIN + CARD_W - 10, div_y)
    
    oy = div_y - 18
    draw_text(c, dx, oy, "Onset", "Inter", 10, TEXT_MUT)
    draw_text(c, dx + 32, oy, "30-60 sec", "JetBrainsMono", 10, TEXT)
    draw_text(c, dx + 100, oy, "·", "Inter", 10, TEXT_FAINT)
    draw_text(c, dx + 110, oy, "Duration", "Inter", 10, TEXT_MUT)
    draw_text(c, dx + 158, oy, "5-10 min", "JetBrainsMono", 10, TEXT)
    cursor_y -= dose_h + gap
    
    # ── ADVERSE EFFECTS / PRECAUTIONS ──
    draw_rounded_rect(c, MARGIN, cursor_y, col_w, adv_h)
    ax2 = MARGIN + 10
    ay2 = cursor_y - 18
    draw_section_label(c, ax2, ay2, "Adverse Effects", ORANGE)
    
    pills_col1 = ["Apnea", "Nausea/Vomiting", "Resp. Depression"]
    pills_col2 = ["Myoclonus", "Adrenal Suppr.", "BP Changes"]
    py1 = ay2 - 22
    pill_gap_v = 20
    for t in pills_col1:
        draw_adverse_pill(c, ax2, py1, t)
        py1 -= pill_gap_v
    px2 = ax2 + 80
    py2 = ay2 - 22
    for t in pills_col2:
        draw_adverse_pill(c, px2, py2, t)
        py2 -= pill_gap_v
    
    draw_rounded_rect(c, cx_start, cursor_y, col_w, adv_h)
    prx = cx_start + 10
    pry = cursor_y - 18
    draw_section_label(c, prx, pry, "Precautions", ORANGE)
    
    max_w = col_w - 20
    pty = pry - 18
    lines = wrap_text(c, "Use caution in adrenal insufficiency - may decrease cortisol. May cause transient hypotension in unstable BP or cardiac patients. Lower dose in elderly.", "Inter", 10.5, max_w)
    for i, line in enumerate(lines):
        draw_text(c, prx, pty - i * 16, line, "Inter", 10.5, TEXT)
    
    # ── FOOTER ──
    draw_text_centered(c, W/2, 18, "ALWAYS FOLLOW YOUR LOCAL PROTOCOL  ·  FOR EDUCATIONAL USE ONLY",
                       "Inter-Medium", 6.5, TEXT_FAINT)
    draw_text_centered(c, W/2, 9, "Created with Perplexity Computer", "Inter", 6.5, TEXT_FAINT)


# ═══════════════════════════════════════════════════════════
# BUILD PDF
# ═══════════════════════════════════════════════════════════
output = "/home/user/workspace/pharma_study_guide.pdf"
c = canvas.Canvas(output, pagesize=(W, H))
c.setTitle("Paramedic Pharmacology Study Guide")
c.setAuthor("Perplexity Computer")

draw_epinephrine(c)
c.showPage()
draw_etomidate(c)
c.showPage()
c.save()

print(f"PDF saved to {output}")
