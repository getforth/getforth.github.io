---
name: Forth Website
description: A quiet dawn landscape around a practical next action.
colors:
  ink: "#0b1421"
  night: "#111d2b"
  cream: "#f5efe6"
  paper: "#f4f0e9"
  muted: "#5c5e60"
  mist: "#c3cbd3"
  gold: "#e8b780"
  line: "#d5d1ca"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(43px, 4.55vw, 63px)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(38px, 4.6vw, 62px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.035em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pill: "100px"
  icon: "8px"
  phone: "39px"
  screen: "33px"
spacing:
  section: "116px"
  section-medium: "88px"
  section-small: "72px"
  gutter: "56px"
  gutter-medium: "36px"
  gutter-small: "24px"
components:
  button-primary:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 23px"
  navigation:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
  tour-tab:
    textColor: "{colors.muted}"
    padding: "24px 0"
  tour-tab-selected:
    textColor: "{colors.ink}"
  policy-link:
    textColor: "{colors.cream}"
    typography: "{typography.label}"
  question:
    textColor: "{colors.ink}"
    padding: "21px 0"
---

# Design System: Forth Website

## Overview

**Creative North Star: "A Little Space at Dawn"**

Forth's public website extends its established midnight navy, amber horizon, cream controls, and Fraunces lettering. The atmosphere is quiet and spacious. Landscape artwork introduces the world; real app captures explain the product with restrained, readable controls.

This document covers the marketing website only. Its visual source of truth is `public/styles.css`, with behavior in `public/site.js` and structure in `public/index.html`. Page strategy belongs in `.impeccable/surfaces/home.md`; the native app has its own design system.

**Key Characteristics:**
- Scenic dark sections alternate with warm paper.
- Expressive serif headings pair with direct system-sans copy.
- Open layouts and fine rules keep the app imagery prominent.
- Small, purposeful movements respect reduced-motion preferences.

## Colors

The palette combines warm, tactile foregrounds with the cool depth of a dawn landscape; frontmatter records the exact CSS values.

### Primary
- **Midnight Ink (`ink`)** anchors dark sections and supplies primary text on paper.
- **Warm Cream (`cream`)** supplies dark-section headings and the primary action fill.

### Secondary
- **Amber Dawn (`gold`)** marks the privacy icon, dark-surface hover states, selection, and focus rings.

### Neutral
- **Deep Night (`night`)** distinguishes the privacy passage from the darker footer.
- **Warm Paper (`paper`)** is the page and explanatory-section background.
- **Quiet Gray (`muted`)** supports readable secondary copy on paper.
- **Morning Mist (`mist`)** supports secondary copy on dark surfaces.
- **Paper Rule (`line`)** separates tour choices and questions.

**The Readable Horizon Rule.** Keep the implemented dark image overlays when changing landscape crops so cream text remains legible.

## Typography

**Display Font:** locally hosted Fraunces Regular, with Georgia and serif fallbacks.
**Body Font:** the platform system sans stack.

Fraunces brings warmth to the wordmark, main headings, privacy lead, and screenshot captions. Sans text carries instructions, navigation, and supporting facts. Use sentence case and balanced heading wraps.

### Hierarchy
- **Display:** the hero promise; its fluid desktop scale is in frontmatter. The separate Forth wordmark uses a larger scale (76–96px) and tighter tracking.
- **Headline:** section headings; the closing section has a larger fluid maximum (72px).
- **Title:** the centered app-screen caption, kept within a narrow measure (310px).
- **Body:** normal reading copy. Introductory paragraphs step up slightly (17px) and stay around a short measure (400–405px).
- **Label:** navigation and policy links. Availability notes use a smaller size (12px); screen provenance uses the smallest size (11px).

## Layout

The centered content container caps at 1184px. Desktop layouts pair two open columns: tour and privacy use a 1.1:1 ratio with a 110px gap; questions use 1:1.25 with a 90px gap. Frontmatter captures section spacing and side gutters.

At 1050px and below, gaps become 55px. At 700px and below, content stacks in source order; the default gap becomes 42px, with 32px for privacy and questions. Header detail links disappear while the Get Forth anchor remains visible. The phone narrows from 278px to 260px. Hero image framing changes from 66% 57% to 61% 50%; mobile uses its own vertical overlay and smaller text.

The hero follows the small viewport height, with explicit minimums to protect the copy: 760px on desktop and 740px on mobile. A short-desktop rule handles viewports at or below 750px tall. At 1500px and above, header padding increases to maintain its alignment with the composition.

## Elevation & Depth

Sections stay flat. Landscape overlays supply atmospheric depth, while the phone screenshot alone uses a diffuse structural shadow (`0 26px 50px -20px rgba(19,29,41,.38)`). The primary action rises slightly on hover; surrounding explanatory content does not float in cards.

Motion uses the CSS ease curve (`cubic-bezier(.16, 1, .3, 1)`). Hero copy enters over 1.1s, landscape brightness enters over 1.6s, and newly selected tour panels enter over 0.4s. Where scroll timelines are supported, the landscape's entrance is replaced by a restrained 12% depth movement on exit. Reduced motion disables animations, transitions, and smooth scrolling.

## Shapes

Cream actions have fully rounded ends. App icons and phone frames retain their established rounded silhouettes; screenshots are clipped inside a dark frame with a small inset (6px). Tour choices and FAQ rows use straight horizontal rules. Thin, rounded SVG strokes carry arrows, chevrons, the privacy shield, and the question toggle.

## Components

### Buttons
The primary action is a cream pill with ink text, medium-weight sans lettering (600), a minimum height (54px), and an inline arrow. Hover brightens the fill and raises the action (2px); its arrow moves right (3px). Pressing returns it to rest. Keep the adjacent availability and subscription note with download actions.

### Navigation
The absolute header sits over the hero with a compact icon and serif brand. Desktop links are plain text; Get Forth adds a fine underline and arrow. Hover turns links amber. Footer links remain visible on mobile and underline on hover.

### Tour Tabs
Full-width ruled rows pair a title with one supporting line and a trailing chevron. Selected rows switch from muted to ink, strengthen the title (650), and advance the chevron (5px). Use the existing tablist, tab, and tabpanel relationships, roving tab index, and Arrow Up/Down, Home, and End handling. Exactly one panel is visible.

### App Screenshot
Present real app captures at their natural aspect ratio inside the phone frame. A serif caption explains the selected screen; the shared screen note identifies example progress. Preserve image provenance in `ASSETS.md`.

### Text Links
The privacy link uses a subtle bottom rule and a small arrow. Hover changes its color to amber; it remains an ordinary link with a descriptive label.

### Questions
Native details and summary elements supply the disclosure behavior. Rows have generous vertical targets (80px minimum desktop, 76px mobile). Opening rotates the plus into a cross (45 degrees), revealing muted body text beneath. Multiple answers may stay open.

All interactive elements use visible focus outlines (3px, offset 6px): darker amber on paper and the gold token on dark surfaces. The skip link becomes visible on keyboard focus. There are no form inputs, chips, or generic cards on this site.

### Download Handoff
`public/download/index.html` uses the same midnight, cream, Fraunces, and system-sans identity for a single browser-handoff instruction. Content is centered in a 400px measure with 24px mobile gutters. The existing app icon is 80px with an 18px radius scaled to that size; the heading spans 38–52px, matching the existing FAQ's maximum. Supporting text is 16px, with availability and the homepage link at 14px. Automatic App Store navigation retains a cream manual action as a fallback. TikTok visitors see the browser-menu instruction; Android visitors see iPhone availability. Scoped layout rules live in `public/download/download.css`.

## Do's and Don'ts

### Do:
- **Do** preserve the established Fraunces, midnight, amber, and cream identity.
- **Do** use real app screenshots and record raster provenance in `ASSETS.md`.
- **Do** preserve keyboard controls, visible focus, and reduced-motion behavior.
- **Do** keep supporting copy narrow and give sections room to breathe.

### Don't:
- **Don't** remove landscape overlays that protect text contrast.
- **Don't** replace the open tour and question rows with decorative cards.
- **Don't** turn product context from the native app into unverified website claims.
- **Don't** introduce sexualized imagery or visuals that shame the person using Forth.
