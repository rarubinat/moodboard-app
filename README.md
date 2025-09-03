# 🎨 MoodBoard App
ng serve


This project is an interactive moodboard designed as a **collaborative tool for agile product teams**. Unlike a traditional moodboard focused on visual inspiration, this one is centered around organizing **ideas, tasks, technical resources, and notes** within a shared and evolving workflow. To provide multidisciplinary teams (design, development, product, QA, etc.)

Built with **Angular 17**, **Tailwind CSS**, and designed with UI clarity in mind.

---

## 💡 Commands to use

| Type        | Description                                           |
|-------------|-------------------------------------------------------|
| `idea`      | Early-stage concept, brainstorming, or feature pitch |
| `research`  | Market analysis, competitive review, technical notes |
| `design`    | UI mockups, wireframes, visual design references     |
| `task`      | To-do or development task                            |
| `code`      | Code snippets, logic components, scripts             |
| `test`      | QA-related content, test cases, test results         |
| `asset`     | Images, icons, logos, illustrations, media           |
| `note`      | Internal notes, meeting logs, reminders              |
| `doc`       | Documentation links, specs, requirements             |


| Status         | Description                                           |
|----------------|-------------------------------------------------------|
| `draft`        | Initial stage; not started or still in idea phase     |
| `in_progress`  | Actively being worked on                              |
| `completed`    | Finished and approved                                 |
| `pending`      | Waiting for input, approval, or external action       |
| `archived`     | No longer active; stored for reference or history     |
| `error`        | Encountered an issue or failed during a process       |


---

## 📌 Why this project?
This app was built to explore the intersection of design and code: merging frontend architecture (Angular) with UI/UX design principles. It demonstrates:

- Component-based architecture
- Tailwind-powered design
- Built with scalable Angular17 architecture (modular & component-based)
- A strong UX/UI creative intention
- Responsive grid layout using Tailwind
- Smooth animations with AOS
- Expand with backend storage

## ✨ Features

- Type selector (type) integrated in the form
- Status badge for visual progress tracking (status)
- Dark/light theme support
- Smooth animations and responsive layout
- Backend integration

---

## 📁 Tech Stack

- **Framework**: Angular 17
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Backend**: Node.js, Express + PostgreSQL(Supabase)
- **Dev Tools**: Angular CLI, TypeScript
- **Deploy**: Github Pages, Render

## 🌐 Backend API

This frontend connects to a Node.js + Express backend that handles all moodboard data (items of type text, image, etc.).

- Backend GitHub repository (public): https://github.com/rarubinat/moodboard-backend

- Base API URL: https://moodboard-backend-4kze.onrender.com/api/items

- Endpoints: **GET /api/items** and **POST /api/items**

---

## 🚀 Getting Started

**Install**
   ```bash
   npm install --save-dev @angular-devkit/build-angular@^17
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ng serve 
   ```

**tailwind.config.js**
   ```bash
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        content: [
            "./src/**/*.{html,ts}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
   ```

   **UUID**
   ```bash
   npm install uuid
   ```

   **AOS**

   ```bash
   npm install aos --save
   ```
---

## 🌍 Deployment
   
   ```bash
   ng build --configuration production
   npx angular-cli-ghpages --dir=dist/moodboard-app/browser
   ```



## 🛠️ Contributing
Feel free to fork this project, use it as a template or build upon it. Pull Requests are welcome!

## 📄 License
All Rights Reserved © 2025 [rarubinat](https://github.com/rarubinat)
