# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static HTML/CSS paramedic pharmacology study guide — no build step, no dependencies, no framework. Open `index.html` directly in a browser to view.

## Structure

- `index.html` — all drug cards, each as a `<main class="card">` block inside `.scroll-container`
- `style.css` — all styles; design tokens defined as CSS custom properties in `:root`

## Card design

Cards are sized exactly for iPhone 14 Pro (390×844 px) with CSS scroll-snap (`scroll-snap-type: y mandatory`). Each card must fit within that fixed height — content that overflows is clipped (`overflow: hidden`). When adding new drug cards, copy an existing `<main class="card">...</main>` block and adjust content to fit within the 844px constraint.

## CSS conventions

- Section header colors are controlled by modifier classes: `section-label--blue`, `--green`, `--red`, `--orange`
- Inline highlights use `.hl` + modifier: `hl--alpha` (orange), `hl--beta` (blue), `hl--warn` (orange bg), `hl--danger` (red)
- Indications use `.checklist` (green dots); contraindications use `.checklist.checklist--x` (red squares)
- Adverse effects use `.pill-list` (chip/badge style)
- The `.callout.callout--danger` pattern exists in CSS but is not yet used in any card

## The inline script

The `<script data-pplx-inline-edit>` block at the bottom of `index.html` is a Perplexity Computer editor utility for screenshot capture within their iframe environment. It does nothing when the page is loaded normally (top-level window). Do not remove it.
