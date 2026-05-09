# H&T Business Advisory — Portfolio

A single-page portfolio website for **H&T Business Advisory** — a trusted accounting,
tax, and bookkeeping firm based in Islamabad, Pakistan, serving clients across
Pakistan, the US, UK, and Canada.

🔗 **LinkedIn:** [linkedin.com/company/handbusinessadvisory](https://www.linkedin.com/company/handbusinessadvisory/)

---

## Overview

A static, responsive single-page site built with vanilla **HTML / CSS / JavaScript** —
no build step, no framework. Brand colors are derived directly from the company logo
and LinkedIn cover (deep teal `#0B3640`, accent teal `#14A3A8`, warm gold `#C9A65A`).

### Sections

- **Hero** — animated brand card, headline, key stats
- **About** — Who We Are, Mission & Vision
- **Core Values** — Integrity, Excellence, Accountability, and more
- **Services** — All 8 service categories (Bookkeeping, Accounting & Reporting,
  Tax & Compliance, Business Consulting, Financial Advisory, AR/AP, Payroll,
  Industry Support)
- **Team** — Leadership profiles with cleaned, white-background photos
- **Global Presence** — Pakistan · US · UK · Canada
- **Why H&T** — Differentiators
- **Contact** — Form + LinkedIn + Islamabad address

---

## Run locally

```bash
# from the project root
python -m http.server 5173
```

Then open <http://localhost:5173>.

Or just open `index.html` directly in any modern browser.

---

## Project structure

```
ht-business-advisory/
├── index.html            # All page sections
├── styles.css            # Brand stylesheet (teal palette + responsive layout)
├── script.js             # Nav toggle, scroll reveal, form handler
├── remove_bg.py          # Helper used to clean team photos to white background
├── README.md
├── .gitignore
└── assets/
    ├── logo.jpg
    ├── cover.png
    ├── founding-partner.png       # white-bg cleaned
    ├── managing-partner.png       # white-bg cleaned
    ├── business-development.png   # white-bg cleaned
    └── *.jpg                      # original team photos (fallbacks)
```

---

## Tech notes

- **Fonts:** Inter (body), Playfair Display (headings) via Google Fonts
- **Images:** Team photos cleaned to white background using
  [`rembg`](https://github.com/danielgatis/rembg) (`remove_bg.py`)
- **Animations:** IntersectionObserver-driven reveal, CSS transforms, conic-gradient halo
- **Responsive:** mobile-first breakpoints at 1024px and 720px
- **No backend:** the contact form shows a local confirmation; wire to a service
  (Formspree, Netlify Forms, or your own API) for production

---

## License

© H&T Business Advisory. All rights reserved.
