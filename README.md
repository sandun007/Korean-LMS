# 🇰🇷 Korean LMS (Learning Management System)

[![Status](https://img.shields.io/badge/Status-Work_In_Progress-amber.svg)](#-project-status--roadmap)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Rolldown_7.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![i18n](https://img.shields.io/badge/i18n-English%20%7C%20한국어-brightgreen)](#-multilingual-support)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> A modern, interactive web-based **Korean Language Learning Management System (LMS)** designed to help students master Korean and prepare for proficiency exams like **EPS-TOPIK** and **TOPIK I & II**.

---

## 📌 Overview

**Korean LMS** provides an all-in-one digital learning platform tailored for Korean language education. It bridges interactive content delivery with exam-focused assessments, featuring dual-format testing (text and audio listening comprehension), structured course catalogs, book materials, and an administrative dashboard.

> ⚠️ **Project Status**: This repository represents the **frontend application (prototype / work-in-progress)**. The core user interface, layouts, examination engine, and navigation are implemented with mock data. Backend services and persistent database integrations are part of the active roadmap.

---

## ✨ Key Features

### 🌐 Public Learning Portal
- **Interactive Landing Page**: Modern visual design featuring dynamic typewriter effects, 3D animated comet cards, hero parallax timeline, and video integration (`HeroClip.mp4`).
- **Course Discovery**: Browse curated courses with categorization, filtering, and detailed course view screens.
- **Resource Center / Book Library**: Dedicated catalog for Korean textbooks, grammar guides, and EPS-TOPIK preparation materials.
- **About & Contact Sections**: Responsive layouts including contact inquiry forms and interactive map embeds.

### 🎧 TOPIK & EPS-TOPIK Examination Engine
- **Dual-Mode Testing**:
  - **Reading & Vocabulary**: Hangul grammar, sentence structure, and vocabulary multiple-choice assessments.
  - **Listening Comprehension**: Audio-enabled questions with custom media playback controls replicating standardized Korean exam conditions.
- **Exam Interface**: Real-time timer, question status palette (visited, answered, skipped), and automated score summary review.
- **Student Exam Gate**: Dedicated student exam login portal (`/dashboard/quizlogin`).
- **Instructor / Admin Quiz Management**: Admin panel to review draft and published quizzes, author questions, and monitor quiz statuses.

### 🌍 Multilingual Support (i18n)
- Seamless internationalization using **i18next** and `react-i18next`.
- Ready-to-use translations for:
  - 🇬🇧 English (`en`)
  - 🇰🇷 Korean (`kr`)
- Automatic browser language detection with runtime toggle capability.

### 📊 Dashboard & Admin Center (In Progress)
- Responsive dashboard layout with sidebar navigation.
- Multi-step course creation wizards (`/dashboard/course/create`, `/dashboard/course/create2`).
- Book management view (`/dashboard/book`).
- User profile & preferences settings (`/profile`).

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework & Core** | [React 19](https://react.dev/), [Vite (Rolldown)](https://vite.dev/), [React Router v7](https://reactrouter.com/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/), [Material Tailwind](https://www.material-tailwind.com/) |
| **Animation & 3D** | [Motion / Framer Motion](https://motion.dev/), [Three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/) |
| **Internationalization** | [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/), `i18next-browser-languagedetector` |
| **Icons & Media** | [Lucide React](https://lucide.dev/), [Heroicons](https://heroicons.com/), [Tabler Icons](https://tabler.io/icons), [React Icons](https://react-icons.github.io/react-icons/) |
| **Utilities** | `clsx`, `tailwind-merge`, `class-variance-authority`, `typewriter-effect`, `react-alice-carousel` |

---

## 📁 Project Structure

```text
Korean LMS/
├── public/                 # Static assets (videos, icons)
│   ├── HeroClip.mp4        # Promotional hero video
│   └── vite.svg
├── src/
│   ├── assets/             # Static graphics and SVGs
│   ├── components/
│   │   ├── about/          # About page components and breadcrumbs
│   │   ├── animata/        # Animated cards & micro-interactions
│   │   ├── books/          # Books catalog view and action bars
│   │   ├── contact/        # Contact forms, connect links, and map
│   │   ├── course/         # Course filters, lists, and action bars
│   │   ├── dashboard/      # Admin and student dashboard
│   │   │   ├── book/       # Dashboard book management
│   │   │   ├── course/     # Dashboard course authoring and preview
│   │   │   ├── layout/     # Dashboard shell and responsive sidebar
│   │   │   ├── profile/    # User settings and profile management
│   │   │   └── quiz/       # Interactive quiz engine & admin quiz panels
│   │   ├── header/         # Top/bottom navbars with language switcher
│   │   ├── home/           # Landing sections (Hero, Category, Ad, Gallery, Timeline)
│   │   └── ui/             # Reusable UI primitives (parallax, sidebar, comet card)
│   ├── lib/                # Common helper utilities (cn helper)
│   ├── locals/             # Translation files (en, kr JSON files)
│   ├── pages/              # Top-level view routes
│   │   ├── About.jsx       # About Us view
│   │   ├── Books.jsx       # Books library view
│   │   ├── Contact.jsx     # Contact view
│   │   ├── Course.jsx      # Courses directory view
│   │   └── Home.jsx        # Landing page
│   ├── App.jsx             # Route definitions (React Router v7)
│   ├── i18n.js             # i18next configuration
│   ├── index.css           # Global stylesheet & Tailwind directives
│   └── main.jsx            # Application entry point
├── package.json            # Project dependencies & npm scripts
└── vite.config.js          # Vite configuration
```

---

## 🚦 Available Routes

| Route | Description |
|---|---|
| `/` | Landing / Home page with interactive showcases |
| `/course` | Public course catalog with filter criteria |
| `/courseview` | Detailed course curriculum & lecture preview |
| `/books` | Study materials and Korean learning book library |
| `/about` | Organization mission, history, and instructors |
| `/contact` | Inquiry form, social links, and physical map |
| `/dashboard/main` | Student / Instructor main dashboard overview |
| `/dashboard/course` | Course management list |
| `/dashboard/course/create` | Course creation wizard - Step 1 |
| `/dashboard/course/create2` | Course creation wizard - Step 2 |
| `/dashboard/book` | Book inventory & asset manager |
| `/dashboard/quizlogin` | Exam access portal for students |
| `/dashboard/quiz` | Quiz lobby & instructions |
| `/dashboard/quizshow` | Live exam runner (text & audio listening test) |
| `/dashboard/adminquiz` | Question authoring & quiz editor panel |
| `/dashboard/adminquizdashboard` | Admin quiz management & metrics overview |
| `/profile` | User profile, notification, and account preferences |

---

## 🚧 Project Status & Roadmap

This project is under active development. Below is the current implementation status:

- [x] Responsive navigation bar with mobile hamburger drawer
- [x] Landing page with typewriter header, 3D card effects, and video hero
- [x] Internationalization (i18n) setup for English and Korean
- [x] Interactive quiz simulator with audio streaming and scoring
- [x] Admin quiz authoring interface
- [x] Multi-step course creation wizard layout
- [x] Book and course resource showcase pages
- [ ] Connect with a backend API (Node.js / Express or NestJS)
- [ ] User authentication with JWT & role-based permissions (Student / Admin / Teacher)
- [ ] Database integration (MongoDB or PostgreSQL) for courses, quizzes, and user results
- [ ] Media storage for user uploads and custom audio listening tracks
- [ ] Real-time student progress tracking and certificate generation

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [npm](https://www.npmjs.com/) (or [pnpm](https://pnpm.io/) / [yarn](https://yarnpkg.com/))
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sandun007/Korean-LMS.git
   cd Korean-LMS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173](http://localhost:5173) to preview the app.

### Production Build

To bundle the application for production deployment:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions, feedback, and suggestions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Sandun**
- GitHub: [@sandun007](https://github.com/sandun007)

---

<p align="center">Made with ❤️ for Korean language learners worldwide.</p>
