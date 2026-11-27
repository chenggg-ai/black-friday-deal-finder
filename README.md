# Black Friday Price Check

[![black-friday-deal-finder-01](https://make.fun/badge/black-friday-deal-finder-01.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![rank](https://make.fun/badge/black-friday-deal-finder-01/chenggg-ai/black-friday-deal-finder/rank.svg)](https://make.fun/c/black-friday-deal-finder-01)
[![reward](https://make.fun/badge/black-friday-deal-finder-01/chenggg-ai/black-friday-deal-finder/reward.svg)](https://make.fun/c/black-friday-deal-finder-01)

A static, offline Black Friday + Cyber Monday deal finder for make.fun
[`black-friday-deal-finder-01`](https://make.fun/c/black-friday-deal-finder-01). Built by `main.ts` (Node 22, stdlib only).

## What it is

12 real deals, each with product, store, a link to that product at the
store, sale price, regular price, and the time the price was checked.
Searchable and filterable by category, store, and discount, with an honest
verdict on every deal: REAL DEAL, GOOD DEAL, or WEAK DEAL (the Switch 2 is
flagged WEAK on purpose — 6% off is a nudge, not a doorbuster).

## Prices — checked 27 Nov 2026

Every price was checked on 27 Nov 2026 against live Black Friday listings
for its store (Amazon, Walmart, Best Buy, Target), cross-checked across at
least two independent deal trackers that read the store's own product pages
that day. Sources are cited per deal on the site and in `dossier.json`.
Verify the final price at checkout — prices and stock can change.

## Build

```sh
node main.ts
# or: MAKEFUN_OUTPUT_DIR=/path/to/out node main.ts
```

Writes `app/`, `screenshots/` and `dossier.json` into the output dir.
Serve the output dir with any static server (ES modules need http, e.g.
`npx serve out` or `python3 -m http.server --directory out`), then open
`app/index.html`. Illustrations are code-drawn inline SVG.

## License

MIT.
