# МолодЁЖ

Russian-speaking community for teens in New Zealand and Australia.
A plain static multi-page website — no build system, no frameworks, no dependencies.

## Structure

```
index.html              # Home (entry point)
pages/                  # Remaining site pages
  about.html  events.html  news.html  join.html  contacts.html
assets/
  css/style.css         # Shared styles (dark theme by default)
  js/nav.js             # Mobile hamburger menu
  js/theme.js           # Dark/light theme toggle
  img/                  # Images (e.g. community logo)
```

## Run

No build step. Open `index.html` in a browser and it just works. There is no dev
server, linter, test, or typecheck.

## Environment

`.env.example` holds placeholder values (`TELEGRAM_BOT_URL`, `CONTACT_EMAIL`,
`COMMUNITY_NAME`). Copy it to `.env` and fill in as needed. The site is fully static
— nothing reads `.env` at runtime yet; these variables are intended for a future
host, API, or build pipeline.

## Notes

- All user-facing content is **in Russian**. Write new copy in Russian.
- Navigation and footer are **manually duplicated** across all 6 HTML files — keep
  them in sync when editing (note root-vs-pages path differences).
- Dark theme is the default; light via `data-theme="light"` on `<html>`. Theme is
  persisted under `localStorage["molodezh-theme"]`.
- Community logo lives at `assets/img/main-group-logo.png` and is shown in the
  brand header on every page.
