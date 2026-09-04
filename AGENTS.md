# AGENTS.md

Static website for **МолодЁЖ**, a Russian-speaking community for teens in New Zealand and Australia.

## Stack
- Plain HTML + CSS + vanilla JS. **No build system, package manager, or framework.** Open `index.html` directly in a browser to preview; there is no dev server or lint/test/typecheck step.
- All user-facing content is written in **Russian**. Keep new copy in Russian unless asked otherwise.

## Structure
- One multi-page site, not an SPA. Entry point `index.html` at root; the other 5 pages (`about`, `events`, `news`, `join`, `contacts`) live in `pages/`.
- Shared assets in `assets/`: `css/style.css`, `js/nav.js` (mobile hamburger menu), `js/theme.js` (dark/light toggle), `img/` for images.
- **Path rules differ**: root `index.html` references assets as `assets/css/…` and pages as `pages/about.html`, while files inside `pages/` use `../assets/…` for assets, `../index.html` for the home link, and same-directory names for sibling pages.
- Navigation/menu and footer are **manually duplicated across all 6 HTML files** — there is no templating. When editing nav or footers, update every file to stay consistent; remember the root-vs-pages path differences. `nav.js` closes the panel on menu-link click; don't break that wiring.

## Theme gotchas (important)
- Dark theme is the default; light via `data-theme="light"` on `<html>`.
- Each page has an **inline script in `<head>`** that restores the saved theme from `localStorage["molodezh-theme"]` (falls back to `prefers-color-scheme`) and sets `data-theme` **before CSS paints** — required to avoid a flash of the wrong theme. Keep this block in the head of any new page, and keep the key name `molodezh-theme` in sync with `theme.js`.
- Brand colors (`--navy`, `--tan`, `--orange`, etc.) are fixed across both themes; only semantic tokens (e.g. `--bg`, `--text`) switch under `:root[data-theme="light"]`.

## Assets
- Community logo lives at `assets/img/main-group-logo.png` and is referenced by the `<header>` brand on every page (root uses `assets/img/…`, pages use `../assets/img/…`).

## Env / secrets
- `.env` (real values) is gitignored; `.env.example` (placeholders) is committed. Nothing reads these at runtime yet — they only document configurable values (`TELEGRAM_BOT_URL`, `CONTACT_EMAIL`, `COMMUNITY_NAME`) for a future host/API/build pipeline. Use EnvSitter to edit `.env`.

## Git
- Single branch `main`; remote uses SSH (`git@github.com:Sifer-crack/Teens-NZ.git`).
- History is minimal (logo/asset commits). Nothing generated or auto-committed.
