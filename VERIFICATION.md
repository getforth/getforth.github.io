# Download handoff verification — September 17, 2026

- Visual-guide update: inspected 390 × 700 mobile and 1440 × 900 desktop views, with two numbered steps, menu/browser symbols, and a gold arrow toward the top-right toolbar. Verified the arrow's transform changes, settles within five seconds, and is disabled under reduced motion. The arrow cannot intercept taps.
- Chromium browser checks with simulated TikTok (including a Safari token), unnamed iOS webview, Safari, Chrome iOS, and Android user agents.
- TikTok and iOS webviews remain on the helper without requesting the App Store. Safari and Chrome iOS automatically request the exact Forth listing; the external request was intercepted to verify its destination.
- Android stays on the page with iPhone availability. With JavaScript disabled, the App Store link and TikTok browser instructions remain usable.
- Inspected mobile (390 × 844) and desktop (1440 × 900) screenshots. Checked 320, 390, 768, and 1440 widths for overflow. No page errors.
- Homepage download links route through the helper only for detected TikTok visits; ordinary browser links and app-tour keyboard navigation pass.
- JavaScript syntax check passed. Design detector ran in degraded regex mode; its advisory heading/instruction-size and icon-radius findings are intentional and documented in DESIGN.md. The download page uses existing solid-surface color pairs and the existing icon.
- WebKit was not installed. These checks verify browser routing and layout, not the native App Store launch or TikTok's actual Open in browser menu on a physical iPhone; that handoff still needs a device check.

# Homepage verification — September 10, 2026

- Full-page visual inspection: 1440 × 900 desktop and 390 × 844 mobile.
- Independent design review disposition: **ship**. No material findings in the source and supplied desktop/mobile captures. Retained Fraunces matches the established Forth identity.
- Chromium interaction checks: app tour click, Arrow Down, and Home selection; native FAQ open/close.
- Responsive widths: 320, 390, 768, and 1440 pixels. No horizontal overflow; primary hero action visible in the tested 900px-high viewports.
- All app-tour assets loaded with no broken images or page errors in the browser check.
- Reduced-motion screenshots: all content visible, transitions disabled.
- App Store, support, privacy, and terms destinations returned HTTP 200. Apple lookup confirmed bundle `com.forthapp.forth`, Apple ID `6796908928`, live version 1.1.
- JavaScript syntax check passed. Asset provenance: six rasters checked, none missing metadata.
- Design detector ran in its regex fallback mode because parser modules were unavailable. Its sole finding was Fraunces overuse, accepted as existing brand typography. Computed contrast was not covered by that detector; the independent source review confirmed solid-surface text contrast.

No native app code changed. No full native test suite was run for this independent static site. Assistive-technology testing and exhaustive photographic-background contrast measurement were outside this quick website pass.
