# Conquer Languages – Website

🔗 **Live Site**: [https://alvarobarrenadev.github.io/conquer-languages-website/](https://alvarobarrenadev.github.io/conquer-languages-website/)

A static multi-page website built with **Vite**, **semantic HTML**, **SCSS (7-1 architecture + BEM)**, and **modular JavaScript**. 
This is a custom clone of the official [Conquer Languages](https://www.conquerlanguages.com) website, adapted to my own design preferences. 

The site is ready for deployment on **GitHub Pages** and includes smooth scrolling, sliders, FAQ accordions, animated counters, a scroll-based timeline, and an accessible video player.

---

## Project Description

This project is a developer-built clone of the official **Conquer Languages** site, implemented as a **static multi-page application**. 
It uses **Vite** for bundling and local development, **SCSS** with the **7-1 architecture** and **BEM** methodology for styling, and **modular JavaScript** for UI functionality. 
Deployment is handled via **GitHub Pages** using the `gh-pages` package.

### Features
- Landing page, product page (Conquer English), About Us, Blog, and multiple article pages.
- Smooth user interactions: smooth scrolling, Swiper sliders, FAQ accordion, animated counters, and scroll-based timeline effects.
- Accessible video player via **Plyr**.
- Page-specific SEO metadata and Open Graph tags.

### Structure
- **Multi-page setup with Vite** – `vite.config.js` defines entry points for each HTML page, producing separate bundles.
- **Base path** – `base: "/conquer-languages-website/"` ensures correct asset paths on GitHub Pages.
- **SCSS 7-1 architecture** – Directories: `abstracts/`, `base/`, `components/`, `layout/`, `pages/`, `themes/`, `vendors/`. 
 Entry file: `src/sass/main.scss` using `@use` with aliases.
- **BEM** naming convention for CSS.

### JavaScript Modules
- `src/js/main.js` – Bootstraps styles and components; initializes Plyr.
- `src/js/home.js` – Hamburger menu, submenu toggle with ARIA, CountUp counters via `IntersectionObserver`.
- `src/js/conquer-english.js` – Swiper sliders for hero/testimonials, FAQ accordion.
- `src/js/timeline-dot.js` – Scroll-based timeline animation.
- `src/js/lenis.js` – Smooth scrolling with Lenis.
- `src/js/posts.js` – Dynamic background for `.posts__hero` using `data-article`.

### Execution Flow
1. HTML loads the Vite-generated bundle.
2. `main.js` imports `main.scss` and registers components.
3. On `DOMContentLoaded`, JavaScript modules initialize.
4. Smooth scrolling and scroll-based animations are triggered.

### Assets & Routing
- `public/` contains favicons, images (`/img/...`), and videos (`/video/...`).
- SEO metadata is manually configured for each page.

### Accessibility
- ARIA states in navigation and accordions.
- Descriptive labels and semantic HTML.
- Colors and typography managed via SCSS variables.

---

## Table of Contents
- [Conquer Languages – Website](#conquer-languages--website)
  - [Project Description](#project-description)
    - [Features](#features)
    - [Structure](#structure)
    - [JavaScript Modules](#javascript-modules)
    - [Execution Flow](#execution-flow)
    - [Assets \& Routing](#assets--routing)
    - [Accessibility](#accessibility)
  - [Table of Contents](#table-of-contents)
  - [Stack](#stack)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Scripts](#scripts)
  - [Local Development](#local-development)
  - [Production Build](#production-build)
  - [Deployment (GitHub Pages)](#deployment-github-pages)
  - [Project Structure](#project-structure)
  - [Styles (SCSS 7-1 + BEM)](#styles-scss-7-1--bem)
  - [Import Aliases](#import-aliases)
  - [Pages/Entrypoints](#pagesentrypoints)
  - [Static Assets](#static-assets)
  - [SEO \& Metadata](#seo--metadata)
  - [Accessibility](#accessibility-1)
  - [Adding a New Page](#adding-a-new-page)
  - [Code Conventions](#code-conventions)
  - [License \& Credits](#license--credits)

---

## Stack
- **Vite** `^7.0.4`
- **Sass/SCSS** `^1.89.2`
- **Lenis** `^1.3.8`
- **Swiper** `^11.2.10`
- **Plyr** `^3.7.8`
- **countup.js** `^2.9.0`
- **gh-pages** `^6.3.0`

## Requirements
- **Node.js** `>= 18`
- **npm** `>= 9`

## Installation
```bash
npm install
````

## Scripts

```bash
npm run dev # Start development server
npm run build # Build for production (./dist)
npm run preview # Preview production build locally
npm run deploy # Deploy ./dist to GitHub Pages (gh-pages branch)
```

## Local Development

```bash
npm run dev
```

Default: `http://localhost:5173`

## Production Build

```bash
npm run build
```

## Deployment (GitHub Pages)

1. Set `base: "/<repo-name>/"` in `vite.config.js`.
2. Run `npm run build`.
3. Run `npm run deploy`.
4. In GitHub → *Settings* → *Pages*, select the `gh-pages` branch.

---

## Project Structure

```
├── index.html # Home page
├── conquer-english.html # Product page
├── sobre-nosotros.html # About Us page (Spanish)
├── blog.html # Blog page
├── poder-tecnologia.html # Article page (Spanish)
├── cinco-consejos-ingles.html # Article page (Spanish)
├── diez-palabras-ingles.html # Article page (Spanish)
├── idiomas-extranjero.html # Article page (Spanish)
├── public/
│ ├── favicon/ # Favicons and manifest
│ ├── img/ # Images
│ └── video/ # Videos
├── src/
│ ├── js/ # JavaScript modules
│ └── sass/ # SCSS (7-1 architecture)
├── vite.config.js # Vite configuration
├── package.json # Dependencies and scripts
└── .gitignore # Ignored files
```

---

## Styles (SCSS 7-1 + BEM)

* **7-1 Architecture**: abstracts, base, components, layout, pages, themes, vendors.
* **Entry file**: `src/sass/main.scss`.
* **Naming**: BEM methodology.

## Import Aliases

```scss
@use '@abstracts/variables' as v;
@use '@layout/layout';
```

## Pages/Entrypoints

* Home, Conquer English, About Us, Blog, and article pages.

## Static Assets

* Store in `public/` and reference as `/img/...` or `/video/...`.

## SEO & Metadata

* Each page has a meta description, Open Graph tags, and canonical URL.

## Accessibility

* ARIA attributes, semantic HTML, accessible components.

## Adding a New Page

1. Create `new-page.html` in the root directory.
2. Add entry in `vite.config.js` under `rollupOptions.input`.
3. Add page-specific SCSS/JS if needed.

## Code Conventions

* CSS: **BEM**.
* JavaScript: Modular, initialized on `DOMContentLoaded`.
* SCSS: Tokens and variables in `abstracts/`.

---

## License & Credits

* **Author**: Álvaro Barrena Revilla
* **Original site**: [Conquer Languages](https://www.conquerlanguages.com)
* **License**: This project is for educational and portfolio use only.