# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow

For every feature or fix, follow this process:
1. Create a new branch with an appropriate name
2. Make the changes on that branch
3. Open a PR to merge into `master`
4. Ask the user if they want to accept the PR
5. If yes, merge the PR into `master`

## What this is

A static HTML/CSS paramedic pharmacology study guide — no build step, no dependencies, no framework. Open `index.html` directly in a browser to view.

## Structure

- `index.html` — all drug cards, each as a `<main class="card">` block inside `.scroll-container`
- `style.css` — all styles; design tokens defined as CSS custom properties in `:root`

## Card design

Cards are currently sized with iPhone 14 Pro (390×844 px) as the primary reference, using CSS scroll-snap (`scroll-snap-type: y mandatory`). Content that overflows is clipped (`overflow: hidden`). When adding new drug cards, copy an existing `<main class="card">...</main>` block and adjust content to fit within the 844px constraint.

**Future goal:** The layout should eventually be fully responsive and fit all device screen sizes, not just iPhone 14 Pro. Avoid hardcoding dimensions that would prevent adaptation to other viewports.

## CSS conventions

- Section header colors are controlled by modifier classes: `section-label--blue`, `--green`, `--red`, `--orange`
- Inline highlights use `.hl` + modifier: `hl--alpha` (orange), `hl--beta` (blue), `hl--warn` (orange bg), `hl--danger` (red)
- Indications use `.checklist` (green dots); contraindications use `.checklist.checklist--x` (red squares)
- Adverse effects use `.pill-list` (chip/badge style)
- The `.callout.callout--danger` pattern exists in CSS but is not yet used in any card

## The inline script

The `<script data-pplx-inline-edit>` block at the bottom of `index.html` is a Perplexity Computer editor utility for screenshot capture within their iframe environment. It does nothing when the page is loaded normally (top-level window). Do not remove it.
