# Forth website

Public homepage for Forth: **https://getforth.github.io/**.

Plain HTML, CSS, and JavaScript. No build step, backend, package installation, analytics, or cookies. The App Store button opens the verified Forth listing (`com.forthapp.forth`, Apple ID `6796908928`). The existing support, privacy, and terms pages remain in `getforth/forth-legal`.

## TikTok bio link

Use **https://getforth.github.io/download/** in TikTok's website field. On iPhone inside TikTok, it asks visitors to choose **Open in browser**. When the same URL opens in Safari or Chrome, it automatically navigates to Forth's HTTPS App Store listing. A manual download link remains if automatic navigation is blocked or JavaScript is unavailable. Android visitors see an iPhone availability message without an automatic redirect.

The homepage's download buttons also use this helper when TikTok is detected. The dedicated bio URL is preferred because the handoff does not depend on cookies, browser storage, or TikTok preserving a URL changed by JavaScript. Browser detection is best-effort; verify the actual TikTok-to-browser handoff on an iPhone after publishing.

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
- `public/site.js`: accessible app screenshot tabs and TikTok download routing.
- `public/download/`: download handoff page and its scoped styles.
- `public/assets/`: optimized Forth artwork, native demo screenshots, and self-hosted type.
- `ASSETS.md`: image provenance and the exact hero generation prompt.
- `DESIGN.md`: website-specific design reference.

## Verification

Visually inspect desktop and mobile after changes. Check screenshot tabs by click and Arrow Up/Down, Home, and End; open the FAQ; verify App Store and legal links; and check narrow layouts for horizontal overflow. Only the public website is deployed; the app project is separate.
