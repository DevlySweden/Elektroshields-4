# Release Checklist (README-driven site)

Use this checklist before you change README requirements or code.

## Core rules
- README is the only source of truth; no extra content or behavior.
- All user-facing text is Swedish when `language.content` is `sv-SE`.
- UTF-8 only; verify Å Ä Ö render correctly.
- No extra CTAs, sections, or visual effects beyond README.

## Layout + selectors
- Keep canonical selector names in sync across JSX + CSS (no silent renames).
- Match all `.gallery__*` selectors exactly if README specifies them.
- Verify section width + gutter usage aligns with `layoutUsage`.

## Gallery (mobile)
- Rail is the only horizontal scroll container.
- Rail enables native horizontal scrolling on mobile (via overflow, not JS):
  - `display: flex; flex-wrap: nowrap;`
  - `overflow-x: auto; overflow-y: hidden;`
  - `-webkit-overflow-scrolling: touch;`
  - `touch-action: pan-x;`
  - `width: 100%; max-width: 100%; min-width: 0;`
- Cards are direct children of rail and use the canonical mobile width rule.
- Outer `.gallery` clips overflow (`overflow: hidden`).
- If the gallery sits inside a grid/flex layout, verify the immediate wrapper allows overflow (e.g. min-width: 0).

## Gallery (desktop)
- Exactly 3 cards visible; no peeking.
- Arrows are real buttons, outside the rail, and scroll exactly one card.
- Rail itself does NOT use smooth scrolling.
- Edge fades visible only when applicable and do not block pointer events.

## Accessibility + motion
- `prefers-reduced-motion` respected (no forced smooth scrolling).
- Rail is focusable (`tabIndex=0`).
- Buttons and links have visible focus states.

## Quick sanity checks (manual)
- Mobile: swipe gallery left/right (page does not scroll horizontally).
- Desktop: arrows move exactly one card; fades behave as specified.
- Header: transparent over hero, solid after ~40px scroll.
- Do not rely on tool audit text alone; verify behavior in DevTools (scrollWidth > clientWidth on rail).

