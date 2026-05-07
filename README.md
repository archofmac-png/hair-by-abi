# Hair by Abi — website

Static, single-page site for an independent hair stylist in Ponchatoula, LA. Same workflow pattern as Bayou Sips: plain HTML/CSS/JS, deployed via GitHub Pages.

## Stack
- Plain HTML / CSS / vanilla JS — no build step, no framework
- Cormorant Garamond + Inter + Caveat (Google Fonts)
- Square Appointments will replace the booking placeholder once Abi finishes setup

## Brand
Palette and typography pulled directly from the salon's signature backdrop (the green leaf wall and "hello gorgeous" neon sign):
- Moss `#3d4f3a`, Cream `#faf6ef`, Blush `#e8b9aa`, Gold `#c8a26a`
- Display: Cormorant Garamond (italic forward)
- Body: Inter
- Script accents: Caveat (mimics the neon)

## Sections
1. Hero — full-bleed photo + script overlay headline
2. Welcome strip — script accent + opening line
3. Services — 6 numbered cards, 3+3 grid (Color is the moss-green feature card; Color Correction has the blush accent)
4. Transformation — interactive before/after slider for Pair A
5. Gallery — 12 photo masonry-style asymmetric grid (`grid-auto-flow: dense`)
6. Bridal — moss-green section with overlapping inset image + blush CTA
7. About Abi — placeholder copy, awaiting bio + headshot from owner
8. Testimonials — 3 placeholder quotes (clearly flagged)
9. FAQ — 7 sensible defaults
10. Visit + Book — moss-deep with Square placeholder button
11. Footer

## Placeholder content (replace before launch)
Anything with the dashed-blush underline treatment is a placeholder — every instance is flagged in the markup with the `.placeholder` class. Specific items still pending Abi's questionnaire:
- Address, phone, hours, social handles
- Service prices
- Bio, training, years behind the chair
- Cancellation / deposit / parking specifics
- Real Google reviews (replace the 3 placeholder testimonials)
- Real headshot (currently using `solo-model-front-facing-curls.jpg` as a stand-in — owner confirmed this is not Abi)
- Square Appointments embed (replaces the placeholder Book button)

## Files
- `index.html` — markup
- `styles.css` — design system + responsive
- `script.js` — header scroll, mobile menu, before/after slider, year stamp, scroll reveal
- `assets/` — 30 curated photos with pair-aware filenames (see ../SELECTIONS.md)
- `robots.txt` — allows AI crawlers explicitly
- `llms.txt` — AI discoverability summary
- `sitemap.xml`

## Local preview
From the repo root:
```
python -m http.server 5177 --directory "claudes work"
```
Or use the `hair-by-abi` entry in the parent `.claude/launch.json`.
