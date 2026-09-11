# Forth website

Public homepage for Forth: **https://getforth.github.io/**.

Plain HTML, CSS, and JavaScript. No build step, backend, package installation, analytics, or cookies. The App Store button opens the verified Forth listing (`com.forthapp.forth`, Apple ID `6796908928`). The existing support, privacy, and terms pages remain in `getforth/forth-legal`.

## Preview

```sh
python3 -m http.server 4173 --directory public
```

Open http://localhost:4173.

## Publish

Push to `main` in `getforth/getforth.github.io`. The Pages workflow publishes only `public/`. Repository Settings → Pages must use **GitHub Actions** as the source.

## Edit

- `public/index.html`: content, App Store links, SEO, app tour, and FAQ.
- `public/styles.css`: responsive layout, design tokens, and reduced-motion styles.
- `public/site.js`: accessible app screenshot tabs with arrow/Home/End keyboard controls.
- `public/assets/`: optimized Forth artwork, native demo screenshots, and self-hosted type.
- `ASSETS.md`: image provenance and the exact hero generation prompt.
- `DESIGN.md`: website-specific design reference.

## Verification

Visually inspect desktop and mobile after changes. Check screenshot tabs by click and Arrow Up/Down, Home, and End; open the FAQ; verify App Store and legal links; and check narrow layouts for horizontal overflow. Only the public website is deployed; the app project is separate.
