# 📝 React Todo List App

A fully-featured todo list application built with **React** and **Vite**, created as a hands-on project to learn core React concepts including state management, hooks, controlled components, and derived state.

## ✨ Features

- **Add todos** — quickly add new tasks via a text input with Enter key support
- **Mark as complete** — toggle completion status with a checkbox, visually indicated with a strikethrough
- **Edit todos** — inline editing of existing todo text without losing your place in the list
- **Delete todos** — remove tasks you no longer need
- **Filter view** — switch between All, Active, and Completed todos
- **Persistent storage** — todos are saved to `localStorage`, so your list survives page refreshes and browser restarts
- **Clean, responsive UI** — dark-themed card layout with smooth hover states and visual feedback

## 🛠️ Tech Stack

- **React** — component-based UI with functional components and hooks (`useState`, `useEffect`)
- **Vite** — fast build tool and dev server with instant Hot Module Replacement (HMR)
- **CSS** — custom styling, no external UI libraries

## 📚 What I Learned

This project was built step-by-step to understand foundational React patterns:

- Managing component state with `useState`
- Handling side effects and syncing with browser storage using `useEffect`
- Working with controlled form inputs
- Immutable state updates using `.map()` and `.filter()` instead of direct mutation
- Conditional rendering based on component state
- Deriving computed values (filtered lists) from existing state rather than storing duplicates

## 🚀 Getting Started

Clone the repo and run it locally:

\`\`\`bash
git clone https://github.com/AryaSingh2001/TO_DO_LIST_APP.git
cd TO_DO_LIST_APP
npm install
npm run dev
\`\`\`

Open `http://localhost:5173` in your browser to see the app running.

## 📦 Build for Production

\`\`\`bash
npm run build
\`\`\`

This outputs an optimized build to the `dist/` folder.

## 📄 License

This project is open source and available for learning purposes.
