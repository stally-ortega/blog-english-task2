# 🌅 Sunsets & Stage — Cúcuta Travel Blog

<div align="center">

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-BEM-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

*An editorial travel blog built with Angular, showcasing a student's experience at an acting competition in Cúcuta, Colombia.*

</div>

---

## 📚 Academic Information

| Field | Detail |
|---|---|
| **University** | Universidad Nacional Abierta y a Distancia — UNAD |
| **Program** | Ingeniería de Sistemas |
| **Course** | English B1 — Course Code 900003 |
| **Activity** | Task 2 — Colombia Travel Bucket List |
| **Aesthetic Reference** | [Sunsets & Stage](https://cucuta-sunsets-and-stage.lovable.app/) |

### 🔗 Live Demo

[![Live Demo](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-orange?style=for-the-badge&logo=github)](https://stally-ortega.github.io/blog-english-task2/)

> **👉 [https://stally-ortega.github.io/blog-english-task2/](https://stally-ortega.github.io/blog-english-task2/)**

---

### English B1 Grammar Coverage

| Section | Grammar Structure |
|---|---|
| The Journey | Past Simple & Phrasal Verbs |
| The Infrastructure | *'Used to'* & Modal Verbs |
| The Stage | First Conditional |
| Survival Guide | `must` · `have to` · `should` |

---

## 📖 Project Description

**Sunsets & Stage** is a responsive, editorial travel blog documenting a first-person journey to Cúcuta, Colombia for a regional acting competition organised by SENA. The blog is structured in four storytelling sections, each designed to demonstrate a specific English B1 grammar structure while presenting factual details about the city's infrastructure, culture, and local life.

### Key Features

- **Editorial Zig-Zag Layout** — CSS Grid alternates image/text columns per section
- **SVG Wave Dividers** — Organic wave transitions between full-bleed section bands
- **Glassmorphism Cards** — `backdrop-filter: blur` panels with warm sunset aesthetics
- **Responsive** — Mobile-first, single-column stacked layout below 768 px
- **Accessible** — ARIA landmarks, `aria-labelledby`, semantic HTML5 throughout
- **Performance** — `ChangeDetectionStrategy.OnPush`, `loading="lazy"` images, `trackBy`

---

## 🛠 Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | **Angular 19** (standalone) | No NgModule boilerplate |
| Language | **TypeScript** (strict) | `readonly` interfaces, typed helpers |
| Styles | **SCSS + BEM** | Design tokens via CSS custom properties |
| Icons | **Font Awesome 6** | Via unpkg CDN |
| Fonts | **Google Fonts** | Playfair Display + Inter |
| Build | **@angular/build** (esbuild) | Dev server + production bundle |
| Deployment | **GitHub Pages** | `angular-cli-ghpages` |

---

## 🏗 Architecture & SOLID Principles

```
src/
└── app/
    ├── models/
    │   └── trip-section.model.ts   # Strictly-typed interface (ISP)
    └── blog/
        ├── blog.component.ts       # Smart container — data layer only (SRP)
        ├── blog.component.html     # Declarative template — no logic
        └── blog.component.scss     # BEM + design tokens
```

| Principle | Implementation |
|---|---|
| **S** — Single Responsibility | `BlogComponent` owns only the data array; all presentation is in the template |
| **O** — Open/Closed | New sections added by appending to `sections[]`; no existing code modified |
| **L** — Liskov Substitution | `TripSection` interface is fully substitutable in `*ngFor` and `trackBy` |
| **I** — Interface Segregation | `parseKeywords()`, `getSectionIcon()`, `formatIndex()` are independent, side-effect-free helpers |
| **D** — Dependency Inversion | `ngOnInit()` stub is ready for `TripService` injection without modifying core logic |

### `TripSection` Interface

```typescript
export interface TripSection {
  readonly id:          string;   // DOM id + NgFor key
  readonly title:       string;   // Section heading (h2)
  readonly subtitle:    string;   // Italic sub-heading
  readonly keywords:    string;   // Comma-separated chip labels
  readonly description: string;   // B1 lead paragraph
  readonly storyText:   string;   // Extended factual narrative
  readonly grammarFocus:string;   // B1 grammar badge label
  readonly imageUrl:    string;   // Section photograph path
}
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum Version |
|---|---|
| Node.js | 20.x LTS |
| npm | 10.x |
| Angular CLI | 19.x |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/sunsets-and-stage.git
cd sunsets-and-stage

# 2. Install dependencies
npm install

# 3. Start the development server
npm run start
# → Application available at http://localhost:4200/
```

### Available Scripts

| Command | Description |
|---|---|
| `npm run start` | Start dev server with hot-reload |
| `npm run build` | Production build (output: `dist/`) |
| `npm run build:ghpages` | Production build configured for GitHub Pages |

---

## 🌐 Deployment — GitHub Pages

This project uses [`angular-cli-ghpages`](https://github.com/angular-schule/angular-cli-ghpages) for zero-config deployment to GitHub Pages.

### One-time Setup

```bash
# Install the deploy tool globally
npm install -g angular-cli-ghpages

# The build:ghpages script is already defined in package.json:
# "build:ghpages": "ng build --base-href /sunsets-and-stage/"
```

### Deploy

```bash
# 1. Build for GitHub Pages (sets the correct base href)
npm run build:ghpages

# 2. Push the dist/ folder to the gh-pages branch
npx angular-cli-ghpages --dir=dist/blog-app/browser

# Your site is live at:
# https://<your-username>.github.io/sunsets-and-stage/
```

> **Note:** Replace `sunsets-and-stage` with your actual GitHub repository name in both the `--base-href` flag and the `angular-cli-ghpages --dir` path.

---

## 📁 Project Structure

```
Blog/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── trip-section.model.ts
│   │   ├── blog/
│   │   │   ├── blog.component.ts
│   │   │   ├── blog.component.html
│   │   │   └── blog.component.scss
│   │   ├── app.ts
│   │   └── app.config.ts
│   ├── assets/
│   │   ├── images/
│   │   │   ├── cucuta-landing.jpg
│   │   │   ├── cucuta-places.jpg
│   │   │   ├── cucuta-activities.jpg
│   │   │   └── cucuta-tips.jpg
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── tsconfig.json
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

---

## 📝 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with care for **UNAD · English B1 · Course 900003**

</div>
