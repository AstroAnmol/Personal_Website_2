# Anmol Sikka — Personal Academic & Research Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/5bb7ed1a-10f3-48a0-a5b2-137aaabf5157/deploy-status)](https://aerospacenerd.com)
[![Design System](https://img.shields.io/badge/Theme-NASA%20Psyche%20Brand%20Palette-302144?style=flat-square)](file:///Users/sikka-mac/Personal/code/personal_website_2/css/style.css)

The official academic portfolio and research website of **Anmol Sikka, PhD** — Planetary Scientist specializing in granular mechanics, magnetic cohesion, and Discrete Element Method (DEM) modeling of asteroid regolith.

🌐 **Live Website**: [aerospacenerd.com](https://aerospacenerd.com)

---

## 🎨 Visual Identity & Design System

Built using the official **NASA Psyche Mission Brand Palette** and custom *Warm Scientific* editorial typography:

- **Primary Colors**:
  - 🧲 **Magenta Plum (`#a53f5b`)**: Category labels, section headers, hero metadata.
  - 🚀 **Psyche Gold (`#f47c33`)**: Primary action buttons, link hover states, filter highlights.
  - ⭐ **Coral Red (`#ef5966`)**: Featured publication badges, alert borders, photo frame offset.
  - ☀️ **Mustard Amber (`#f9a000`)**: Stat highlights, active subnav indicators, radial lighting.
  - 🌌 **Dark Space Purple (`#302144`)**: Primary serif titles and headings in Light Mode.
  - 🌑 **Rich Cosmic Black (`#12031d`)**: Deep space background base in Dark Mode.
- **Typography**: Playfair Display (Serif), Inter (Sans-serif), JetBrains Mono (Monospace).
- **Features**: Persistent Light/Dark Mode toggle (anti-flash inline script), responsive mobile drawer navigation, sticky teaching subnav observer, and zero-popup overlay lightboxes.

---

## 📁 Repository Structure

```
.
├── index.html              # Homepage / About / Featured Research / Tools & Skills / Recent News
├── research.html           # 2-Column Research Portfolio with categorized cards & overlay modals
├── publications.html       # Peer-reviewed journals, conference papers & technical reports
├── teaching.html           # Orbital mechanics, spaceflight navigation & mentorship record
├── cv.html                 # 2-column split academic CV matching PDF layout
├── news.html               # Full filterable news & announcements archive
├── 404.html                # Custom branded error page
├── _redirects              # Netlify clean URL routing configuration
├── css/
│   ├── style.css           # Core design system tokens & responsive rules (NASA Psyche theme)
│   └── style-archived-original.css # Archived original warm terracotta theme backup
├── js/
│   ├── main.js             # Navigation, theme toggle, smooth scroll & modal handlers
│   ├── projects-data.js    # Data store & dynamic rendering engine for research projects
│   └── news-data.js        # Data store & dynamic rendering engine for news items
└── assets/
    ├── img/
    │   ├── favicon.png     # Official site icon
    │   └── Profile_pic.jpg # Hero portrait photo
    └── pdf/
        └── Curriculum_Vitae.pdf # Downloadable PDF CV
```

---

## 🛠️ Content Management & Updating

### 1. Adding a New Research Project
To add a new project, edit [`js/projects-data.js`](file:///Users/sikka-mac/Personal/code/personal_website_2/js/projects-data.js) and append an object to the `PROJECTS` array:

```javascript
{
  id: "new-project-id",
  category: "planetary", // "planetary" | "mission" | "smallsat"
  catLabel: "Institutional Subtitle",
  title: "🚀 Project Title with Emoji",
  desc: "Short summary text for the card.",
  image: "assets/img/projects/thumbnail.jpg", // null for 2-color fallback gradient
  archived: false, // set to true to hide from public site
  tags: ["Tag 1", "Tag 2"],
  cardLinks: [
    { label: "Paper DOI ↗", url: "https://doi.org/...", primary: false, icon: "fa-newspaper", external: true }
  ],
  modal: {
    mediaIcon: "fa-film",
    mediaText: "Media Title",
    mediaHint: "Video/GIF embed code or hint",
    heading: "Key Contributions",
    bullets: ["Bullet 1", "Bullet 2"],
    links: [{ label: "Link ↗", url: "https://...", primary: true, icon: "fa-link" }]
  }
}
```

### 2. Adding a New News Entry
To publish a news item, edit [`js/news-data.js`](file:///Users/sikka-mac/Personal/code/personal_website_2/js/news-data.js) and add an entry to the `NEWS` array:

```javascript
{
  date: "Aug 2026",
  sortKey: "2026-08-08",
  tag: "paper", // "paper" | "talk" | "award" | "milestone" | "service" | "misc"
  html: `Journal article published in <strong>The Planetary Science Journal</strong>. <a href="...">DOI →</a>`
}
```

---

## 🚀 Local Development & Netlify Deployment

### Local Preview
Simply open `index.html` in any browser, or run a local HTTP server:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### Deployment to Netlify
1. Connect this GitHub repository (`AstroAnmol/Personal_Website_2`) to **Netlify**.
2. Set Build command: *(leave empty for static HTML)*.
3. Set Publish directory: `./` or `.`.
4. Netlify will automatically build clean URLs via `_redirects` and publish changes on `git push`.

---

## 📄 License & Attribution

© 2026 Anmol Sikka. All rights reserved.
Design inspired by NASA's Psyche Mission Brand Guide.
