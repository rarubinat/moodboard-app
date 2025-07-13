# 🎨 MoodBoard App

A minimal and creative web app to collect visual inspiration — images, color palettes, quotes, and links — organized in a beautiful board layout.

Built with **Angular 17**, **Tailwind CSS**, and designed with UI clarity in mind.

---


💡 Why this project?
This app was built to explore the intersection of design and code: merging frontend architecture (Angular) with UI/UX design principles. It demonstrates:

- Component-based architecture
- Tailwind-powered design
- Clean, scalable Angular structure
- A strong UX/UI creative intention

## ✨ Features

- Add and organize visual items: photos, quotes, colors, links
- Responsive grid layout using Tailwind
- Smooth animations with AOS
- Built with scalable Angular architecture (modular & component-based)
- Ready to expand with Firebase or local storage

---

## 📁 Tech Stack

- **Framework**: Angular 17
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Optional**: Firebase for realtime data
- **Dev Tools**: Angular CLI, TypeScript

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

## 🤝 Contributing
Feel free to fork this project, use it as a template or build upon it. Pull Requests are welcome!
