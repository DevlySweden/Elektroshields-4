## 0) GLOBAL RULES (MUST FOLLOW)

- Treat this README as the only input source.
- Do NOT invent missing values. If a field is empty, keep it empty.
- Only JavaScript (no TypeScript).
- React + Vite project.
- Use plain CSS (no Tailwind). No extra libs.
- Always delete default Vite/React assets (`public/vite.svg`, `src/assets/react.svg`).
- All site images must live in `public/assets/...` so they are served directly by Netlify/Vite.
- Keep components reusable and content-driven (no company text hardcoded in components).
- All visible website content must be written in Swedish when CONFIG.language.content is "sv-SE".
- Must be responsive (mobile-first) and accessible.
- ALL text/content files must be UTF-8 encoded (ÅÄÖ must render correctly).
- Motion must respect prefers-reduced-motion.
- Premium constraint: keep UI minimal. Avoid “app UI” patterns (glassy buttons, heavy cards, strong shadows).
- No placeholder lorem content; use provided text only.
- If a component behavior is described in WEBSITE SPEC, the component MUST implement it exactly (no fallbacks).


---

## 1) CONFIG (EDIT THIS PER COMPANY) — YAML

**IMPORTANT:** Do not change the key names.

```yaml
language:
  content: "sv-SE"
  codeComments: "en"

company:
  name: "Elektroshields"
  domain: "elektroshields.se"
  location: "Stockholm med kranskommuner och Stockholms skärgård"
  tagline: "Elinstallationer av hög kvalitet"
  description: "Elektroshields arbetar med elinstallationer för både privatpersoner och företag. Tjänsterna omfattar elinstallation, eldesign och ljusdesign, projektering, styrsystem, belysning samt energioptimering och energieffektivisering."

contact:
  email: "info@elektroshields.se"
  phone: "+46 70 717 10 60"

branding:
  accentColor: "#1f2933"
  logoPath: "/assets/brand/logo.png"
  fontFamily: "system" # allowed: system

layout:
  # WIDTHS (caps)
  containerMaxWidthPx: 1360
  wideContainerMaxWidthPx: 1760
  fullBleedMaxWidthPx: 9999

  # FLUID MODE (laptop-friendly)
  containerFluidVw: 92
  wideContainerFluidVw: 98
  narrowContainerMaxWidthPx: 1120
  narrowContainerFluidVw: 92

  # VERTICAL RHYTHM
  sectionPaddingYMobilePx: 72
  sectionPaddingYDesktopPx: 104

  # SHAPE / DEPTH
  borderRadiusPx: 8
  shadowStyle: "soft"
  headerHeightPx: 72

  # FLUID GUTTERS
  gutterTight: "clamp(18px, 2.0vw, 44px)"
  gutterStandard: "clamp(26px, 3.2vw, 80px)"
  gutterWide: "clamp(34px, 4.8vw, 120px)"

layoutUsage:
  header:   { width: "wide",     gutter: "tight" }
  hero:     { width: "standard", gutter: "wide" }
  services: { width: "standard", gutter: "standard" }
  projects: { width: "wide",     gutter: "tight" }
  gallery:  { width: "narrow",   gutter: "tight" }
  contact:  { width: "standard", gutter: "standard" }
  footer:   { width: "wide",     gutter: "tight" }

motion:
  preset: "fade-up" # allowed: fade-up
  durationMs: 520
  staggerMs: 90

hero:
  imagePath: "/assets/brand/hero.jpg"
  badge: "Elinstallation • Ljusdesign • Styrsystem • Projektering"
  headline: "Elinstallationer av högsta kvalitet."
  subtext: "För privatpersoner och företag i Stockholm med kranskommuner och Stockholms skärgård."
  primaryAction: null
  secondaryAction:
    label: "Kontakta oss"
    target: "contact"

services:
  presentation: "textual" # NOT cards
  sectionTitle: "Tjänster"
  sectionText: "Elinstallationer och tekniska lösningar med fokus på kvalitet, säkerhet och långsiktig funktion."
  items:
    - title: "Elinstallation"
      desc: "Elinstallationer för både privatpersoner och företag, utförda enligt gällande regler och med hög yrkesstandard."
    - title: "Eldesign & Ljusdesign"
      desc: "Planering och utformning av el- och ljuslösningar anpassade efter funktion, estetik och energieffektivitet."
    - title: "Projektering"
      desc: "Strukturerad projektering som säkerställer rätt lösning från tidigt skede till färdig installation."
    - title: "Styrsystem"
      desc: "Installation och anpassning av styrsystem för belysning och tekniska funktioner i fastigheter."
    - title: "Belysning"
      desc: "Installation av funktionell och energieffektiv belysning för bostäder, kommersiella lokaler och industri."
    - title: "Energioptimering"
      desc: "Åtgärder för energioptimering och energieffektivisering genom smarta el- och belysningslösningar."

projects:
  sectionTitle: "Verksamhetsområden"
  sectionText: "Vi arbetar med elinstallationer i olika miljöer, anpassade efter varje kunds behov och förutsättningar."
  layout: "editorial-stack"
  flow: "vertical"
  widthPattern: ["wide", "narrow", "wide"]
  maxItems: 3
  imageDominance: "high"
  cardStyle: "flat"
  rhythm: "asymmetric" # IMPORTANT
  items:
    - title: "Privatbostäder"
      meta: "Elinstallation • Belysning"
      desc: "Elinstallationer och belysningslösningar för villor, lägenheter och fritidshus."
      imagePath: "/assets/areas/private.jpg"
    - title: "Företag & kommersiella lokaler"
      meta: "Projektering • Styrsystem"
      desc: "Tekniska el- och styrsystem anpassade för kontor, butiker och verksamhetslokaler."
      imagePath: "/assets/areas/commercial.jpg"
    - title: "Skärgård & specialmiljöer"
      meta: "Installation • Driftssäkerhet"
      desc: "Elinstallationer i krävande miljöer med fokus på driftsäkerhet och hållbarhet."
      imagePath: "/assets/areas/archipelago.jpg"

# NEW: iPhone/portrait image scroll section
gallery:
  sectionTitle: "Projektbilder"
  sectionText: "Ett urval från jobb och miljöer vi arbetar i."

  behavior:
    aspectRatio: "9/16"
    imageFit: "cover"

    # DESKTOP LAYOUT — HARD RULE
    desktopColumns: 3          # MUST show exactly 3 cards
    desktopPeek: false         # MUST NOT show partial cards

    gapPx: 22            # space between cards
    edgePaddingPx: 22      # padding inside the rail

    # Interaction
    interaction: "arrows"
    showArrowsDesktop: true

    # Scrolling rules
    scrollBehavior: "auto"
    hideScrollbar: true

    # Explicitly forbid scroll tricks
    wheelToHorizontal: false
    snapDesktop: "none"

  images:
    - src: "/assets/gallery/01.jpg"
      alt: "Elinstallation i pågående projekt"
    - src: "/assets/gallery/02.jpg"
      alt: "Belysning i trapphus"
    - src: "/assets/gallery/03.jpg"
      alt: "Styrsystem och teknik"
    - src: "/assets/gallery/04.jpg"
      alt: "Belysningslösning i bostad"
    - src: "/assets/gallery/05.jpg"
      alt: "Installation i specialmiljö"

contactSection:
  sectionTitle: "Kontakt"
  sectionText: "Hör av dig med frågor eller underlag, så återkommer vi."
  form:
    enabled: true
    submitBehavior: "mock"
    fields:
      nameLabel: "Namn"
      emailLabel: "E-post"
      messageLabel: "Meddelande"
      namePlaceholder: "Ditt namn"
      emailPlaceholder: "din@mail.se"
      messagePlaceholder: "Berätta kort..."
      submitText: "Skicka"
    disclaimerText: "Formuläret är en mock just nu. Vi kopplar det till e-post/API senare."

footer:
  textTemplate: "© {YEAR} {COMPANY}. Alla rättigheter förbehållna."
```

## 2) WEBSITE SPEC

### Scope

- Build a single-page website.
- The site must feel premium: calm, minimal, consistent.
- Portfolio-first: projects must look like a showcase, not app cards.
- Section widths are controlled by layoutUsage (header/hero/services/projects/gallery/contact/footer).

---

### Sections (order is mandatory)

1. Hero  
2. Services  
3. Verksamhetsområden  
4. Projektbilder (Gallery) # NEW  
5. Contact  
6. Footer  

---

### Header behavior

- Header is fixed.
- Over hero: transparent background.
- After scrolling more than 40px:
  - Background becomes solid (white or near-white).
  - Subtle shadow.
  - Smooth transition 150ms–220ms.
- Only ONE header CTA (Contact).

---

### Hero section

- Full viewport height.
- Large background image + dark overlay for readability.
- Content: badge, headline, subtext.

**CTA rules:**
- No primary CTA in hero.
- Optional secondary text-link/button that scrolls to Contact.

Hero background (image + overlay) spans full width; only the text content follows `layoutUsage.hero`.

---

### Services section

- Minimal grid/list.
- No icons unless provided in content.
- Uses motion preset with stagger.
- Services should read as capabilities, not features.
- No bordered cards; use typographic list/grid with subtle dividers.

---

### Verksamhetsområden (premium editorial)

- Desktop: editorial stack (single column flow), with alternating image/text alignment and varying content widths.
- Mobile: 1 column.
- Area blocks must be large with generous spacing.
- Image should dominate; text is short.
- Hover: minimal (tiny translate + subtle overlay), avoid heavy shadows.
- Area cards must not resemble UI cards.
- They should feel editorial and content-first.
- Area layout must avoid perfect symmetry.
- Cards may vary slightly in vertical offset or spacing to create an editorial rhythm.

---

### Projektbilder (Gallery) — iPhone-format, bara bilder

**Purpose:**  
Show real-world project photos (portrait phone photos) in a curated, premium rail.

**Content**
- Only images (no captions, no project titles, no cards).
- Alt text is required (from YAML).

**Layout**
- Portrait cards: CSS `aspect-ratio: 9 / 16`.
- Use `gallery.behavior.imageFit` for `object-fit` (default cover).
- Spacing MUST use:
  - `gallery.behavior.gapPx` as the horizontal gap between cards (px).
  - `gallery.behavior.edgePaddingPx` as left/right padding inside the rail (px).
- Scrollbars must be hidden or extremely subtle (use `gallery.behavior.hideScrollbar`).
- Do NOT use scroll snapping on desktop.
- Do NOT use clamp(), vw-based widths, or JS layout calculations for desktop card sizing.

**Desktop layout (MUST): exactly 3 cards**
- On desktop, the gallery rail MUST display exactly 3 full cards.
- Partial cards (peeking 4th card) are NOT allowed.
- Card width MUST be calculated from the rail width using CSS only:
  - `cardWidth = (100% - (2 × edgePadding) - (2 × gap)) / 3`
  - In the formula above, 100% refers to the rail element’s content box width (the scroll container), not the section/container width.
- This 3-column sizing MUST only apply at desktop breakpoint and above (e.g. min-width: 900px or equivalent).

**Edge fade (MUST, desktop)**
- Use a subtle edge fade to indicate overflow.
- Default: show ONLY a right-edge fade when the rail is not at the end.
- When the user has scrolled away from the start, a very subtle left-edge fade may appear (optional), but it must be weaker than the right.
- The fade must be a gradient overlay that sits above the rail background, not a blur/filter on the images.
- Fade must NOT reduce image contrast heavily:
  - Keep opacity low and the fade width narrow (around 40–80px).
- The fade must not intercept pointer events (`pointer-events: none`).

**Fade behavior (MUST)**
- Right fade is visible when there is more content to the right.
- Right fade disappears when at the end.
- Left fade is hidden at the start (or extremely subtle).

**CSS implementation (MUST)**
- The rail MUST define CSS variables:
  - `--g-cols` = `gallery.behavior.desktopColumns` (must be 3 on desktop)
  - `--g-gap` = `gallery.behavior.gapPx` (px)
  - `--g-edge` = `gallery.behavior.edgePaddingPx` (px)
- Card width MUST be computed on the rail:
  - `--g-cardW: calc((100% - (2 * var(--g-edge)) - ((var(--g-cols) - 1) * var(--g-gap))) / var(--g-cols))`
- On desktop breakpoint and above, each card MUST use:
  - `flex: 0 0 var(--g-cardW)`
- If <figure> is used in the gallery, `.gallery figure { margin: 0; }` MUST be applied.

**Desktop interaction (MUST): Rail + arrows**
- Primary navigation on desktop MUST be left/right arrow buttons (from `gallery.behavior.interaction: "arrows"`).
- Arrows must be real `button` elements with `aria-label` (accessible).
- Arrow controls (MUST, desktop):
  - Arrow buttons must be positioned OUTSIDE the rail (not on top of photos).
  - Place them vertically centered relative to the rail.
  - Buttons must be minimal: no heavy shadow, subtle border or no border, small icon with generous hit area.
  - States:
    - Default: slightly muted.
    - Hover: slightly stronger.
    - Disabled at the start/end: low opacity and not clickable.
- Clicking an arrow scrolls exactly ONE card per click:
  - step MUST equal `cardWidth + gap`.
  - step MUST be derived from the rendered layout (recommended: measure the first card width via `getBoundingClientRect().width` + gap).
- The rail element itself must NOT have smooth scrolling:
  - Force `scroll-behavior: auto` on the rail (use `gallery.behavior.scrollBehavior: "auto"`).
- The arrow click may use smooth behavior ONLY for that click:
  - `rail.scrollBy({ left: step, behavior: "smooth" })`
  - Respect `prefers-reduced-motion`: if reduced motion is enabled, use `behavior: "auto"`.

  **Arrow controls (MUST, desktop — Variant 1: circular outline)**

- Arrow buttons MUST use a circular shape (no square or rectangular buttons).
- Buttons MUST be positioned OUTSIDE the rail, on the light background.
- Vertically center arrows relative to the gallery rail.

**Visual style (MUST)**
- Shape: perfect circle.
- Hit area: 40–44px diameter.
- Icon size: ~14–16px.
- Background:
  - Subtle, semi-transparent light background (not solid white).
  - Must not feel like a “box”.
- Border:
  - Thin outline (≈1px) with low-to-medium contrast.
  - Outline must provide visibility even in bright environments (e.g. sunlight).
- Icon:
  - Dark, readable arrow icon.
  - Must maintain sufficient contrast against the background.

**States**
- Default:
  - Calm and slightly muted.
- Hover:
  - Slightly stronger outline and icon contrast.
- Disabled (start/end of rail):
  - Very low opacity (≈20–30%).
  - Not clickable.
  - Still visible (do not hide).

**Behavior**
- Arrows MUST scroll exactly ONE card per click.
- Arrow clicks MAY use smooth scrolling.
- The rail itself MUST NOT use smooth scrolling.

**Accessibility**
- Arrows MUST be real `<button>` elements.
- Provide `aria-label` (e.g. “Scroll left”, “Scroll right”).
- Visible focus state is required (subtle but clear).
- Buttons must be keyboard operable.

**Restrictions**
- Do NOT use shadows, glass effects, or heavy backgrounds.
- Do NOT place arrows on top of images.
- Do NOT use square or rounded-rectangle buttons.

**Arrow visibility tuning (MUST – fine adjustment)**

- Arrow buttons MUST remain visually subtle but clearly discoverable in bright environments (e.g. laptop in sunlight).
- Increase perceived contrast slightly compared to the base state:
  - Outline contrast MUST be strong enough to remain visible on a light background.
  - Background opacity MUST be subtle but not fully transparent.
- Do NOT increase button size to achieve visibility.
- Do NOT use shadows or glow effects.

**Arrow positioning (MUST – refinement)**
- Arrow buttons MUST be positioned slightly closer to the rail than the default:
  - Reduce horizontal distance between arrow and rail by a small amount (≈10–16px).
- Arrows must still remain outside the rail and not overlap images.

**Disabled state refinement (MUST)**
- Disabled arrows MUST remain visible as a contextual indicator.
- Disabled state MUST:
  - Keep the circular outline visible.
  - Reduce opacity clearly, but not to invisibility.
- Disabled arrows MUST NOT be hidden or removed from layout.

**Arrow spec lock (MUST – exact visual)**

Use the exact arrow button shape, size, border, background, and SVG below so the arrows are always identical across builds.

**Button geometry**
- Diameter: 42px (hit area).
- Border radius: 999px (perfect circle).
- Border: 1px solid rgba(31, 41, 51, 0.38).
- Background: rgba(255, 255, 255, 0.72).
- Icon color: #1b232b (default), #0f141a (hover).
- Disabled opacity: 0.3 (keep border visible).

**SVG (MUST use this path)**
- Use an inline SVG with `viewBox="0 0 24 24"` and a single `path`.
- Stroke only (no fill), stroke width 1.8, round caps/joins.

```
<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
  <path
    d="M8.5 5.5l7 6.5-7 6.5"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
```

**Direction**
- Right arrow: SVG as-is.
- Left arrow: rotate the SVG 180deg or flip via `transform: scaleX(-1)`.

**Mobile horizontal scroll (MUST — canonical implementation)**
- Gallery MUST render a dedicated rail element: `.gallery__rail` (this exact class name).
- `.gallery__rail` MUST be the horizontal scroll container on mobile:
  - `display: flex; flex-wrap: nowrap;`
  - `gap: var(--g-gap);`
  - `padding: 0 var(--g-edge);`
  - `overflow-x: auto; overflow-y: hidden;`
  - `-webkit-overflow-scrolling: touch;`
  - `scroll-behavior: auto;`
- Gallery cards MUST be direct children of `.gallery__rail` and MUST NOT shrink on mobile:
  - `.gallery__card { flex: 0 0 72vw; }`
  - `.gallery__card { max-width: 260px; }`
- The Gallery section MUST NOT create page-level horizontal scrolling:
  - `.gallery { overflow: hidden; }`
- Any fade overlays MUST NOT block touch/drag:
  - `pointer-events: none;`
- Gallery MUST render `.gallery__railWrap` around `.gallery__rail`.
- `.gallery__railWrap` MUST apply the critical scroll constraint (min-width: 0; width/max-width: 100%).


**Critical scroll constraint (MUST)**
- The gallery rail MUST be wrapped by a dedicated wrapper element: `.gallery__railWrap` (this exact class name).
- The wrapper MUST prevent grid/flex min-content expansion so the rail can overflow and scroll:
  - `.gallery__railWrap { min-width: 0; width: 100%; max-width: 100%; }`
- The scroll container MUST be the rail element (not the wrapper):
  - `.gallery__rail { overflow-x: auto; overflow-y: hidden; }`


**Forbidden behaviors (desktop)**
- Do NOT implement wheel-to-horizontal translation.
- Do NOT add wheel event handlers for the gallery.
- Do NOT use scroll snapping on desktop (`scroll-snap-type` must not be set on desktop).
- Do NOT apply `scroll-behavior: smooth` to the rail element itself.

**Accessibility**
- The rail must be focusable (e.g., `tabIndex=0`) so keyboard users can reach it.
- Arrow buttons must be keyboard-operable and have visible focus states.
- Images must have meaningful alt text.
- Respect `prefers-reduced-motion`.

**Premium constraints**
- Cards must feel like photos, not UI cards: minimal border, no heavy shadows, subtle corner radius only.
- Keep arrow buttons minimal (small, calm, non-glassy). Disabled state at start/end is required.



---

### Contact section

- Left: contact info.
- Right: form (if enabled).
- Form is calm and minimal.

---

### Typography + spacing constraints

- Use layout config values for container width and section paddings.
- Avoid strong borders, heavy shadows, glassmorphism.
- Avoid rounded UI aesthetics. Corners must be subtle.

---

### Layout width rules

- The site must use wide layouts to avoid a boxed “template” look.
- Use `layout.wideContainerMaxWidthPx` for most sections (Header/Services/Projects/Gallery/Contact/Footer).
- Hero background is full-bleed. Hero content uses `layoutUsage.hero` width/gutter.
- Only constrain text blocks (paragraphs) for readability; do NOT center the entire section in a narrow container.
- Background colors/gradients may span full width while content aligns to the wide container.
- Avoid a single global container for all sections.
- Each section must use `layoutUsage.{section}.width` and `.gutter`.
- Implement gutters as fluid `clamp()` values from `layout.gutter*`.
- Do not use pure `vw` widths for main content; use max-width containers + fluid gutters.
- Wide content must cap at `layout.wideContainerMaxWidthPx` (do not expand beyond).
- Do not make text paragraphs span the full wide width; keep long text blocks in standard/narrow.

**Fluid container widths:**
- `standard` uses `min(layout.containerMaxWidthPx, layout.containerFluidVw vw)`
- `wide` uses `min(layout.wideContainerMaxWidthPx, layout.wideContainerFluidVw vw)`
- `narrow` uses `min(layout.narrowContainerMaxWidthPx, layout.narrowContainerFluidVw vw)`

---

## 3) FILE MAP

### Root
- README.md
- package.json
- vite.config.js

### Source structure
src/
- App.jsx
- main.jsx
 
public/
- assets/
  - brand/
    - logo.png
    - hero.jpg
  - areas/
    - private.jpg
    - commercial.jpg
    - archipelago.jpg
  - gallery/
    - 01.jpg
    - 02.jpg
    - 03.jpg
    - 04.jpg
    - 05.jpg

src/content/
- site.js
- projects.js
- gallery.js

src/components/
- Header.jsx
- Hero.jsx
- Services.jsx
- Projects.jsx
- Gallery.jsx
- Contact.jsx
- Footer.jsx

src/hooks/
- useScrollPosition.js
- useReducedMotion.js

src/styles/
- global.css

### Rules
- All listed files must exist.
- Components must import content from src/content/.
- No company-specific strings hardcoded in components.
- Styling in src/styles/global.css.
