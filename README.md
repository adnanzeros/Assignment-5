# 🚀 DevStack

**DevStack** is a React-based technology stack management website where users can explore technologies, view technology details, and build their own development stack by selecting and removing technologies.

## 🔗 Project Links

- **GitHub Repository:** https://github.com/adnanzeros/Assignment-5
- **Live Demo:** _Add your deployed website URL here_

## 📸 Project Screenshot

_Add a screenshot of the project here._

```md
![DevStack Screenshot](./public/screenshot.png)
```

> Replace `./public/screenshot.png` with the actual screenshot path if your screenshot has a different name or location.

## ✨ Features

- 🔍 **Explore Technologies** — Browse available technologies and their information.
- ➕ **Build Your Stack** — Add technologies to your personal development stack.
- 🗑️ **Manage Your Stack** — Remove technologies from your selected stack.
- ⚡ **Dynamic Data Loading** — Technology data is loaded from a JSON data file.
- 🔔 **Toast Notifications** — Provides user feedback through React Toastify.
- 📱 **Responsive Interface** — Designed to work across different screen sizes.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- JSON
- Vite
- React Hooks
  - `useState`
  - `useEffect`
- React Toastify

## 📦 Dependencies

Main project dependencies include:

- `react`
- `react-dom`
- `react-toastify`

Development/build tools include:

- `vite`
- `@vitejs/plugin-react`
- `oxlint`

See `package.json` for the complete dependency list.

## 📂 Project Structure

```
Assignment-5/
├── public/
├── src/
│   ├── components/
│   │   ├── nav/
│   │   ├── hero/
│   │   ├── technologycard/
│   │   ├── yourstack/
│   │   └── footer/
│   ├── data/
│   │   └── technologies.json
│   ├── App.jsx
│   └── App.css
├── B14-A05-DevStack/
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 💻 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/adnanzeros/Assignment-5.git
```

### 2. Go to the project directory

```bash
cd Assignment-5
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Then open the local URL shown in your terminal.

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 🧩 How It Works

1. Technology information is stored in a JSON data file.
2. React loads the technology data when the application starts.
3. Users can select technologies to add them to their stack.
4. The selected stack is displayed dynamically.
5. Users can remove technologies from their stack.
6. Toast notifications provide feedback for relevant actions.

---

# 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension that allows us to write HTML-like markup inside JavaScript. It makes React UI code easier to read and maintain.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.

**State** is data managed inside a component that can change over time and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to create and manage state.

In this project, it is used to manage application data such as the technology list, loading state, and selected technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` allows us to run side effects after a component renders.

In this project, it is used to load the technology data when the application starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify individual items in a list. A unique key helps React efficiently determine which items have changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI based on a condition.

For example, the selected stack can show an empty-state message when no technology has been selected:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTechnologies.map((technology) => (
    <div key={technology.id}>{technology.name}</div>
  ))
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**.

A child can communicate back to the parent by calling a function that the parent passes as a prop.

For example:

```jsx
<Child onSelect={handleSelect} />
```

The child can call:

```jsx
onSelect(data);
```

This allows the child component to send data back to the parent component.

## 👨‍💻 Author

**Adnan Sami**

- GitHub: https://github.com/adnanzeros
- LinkedIn: https://www.linkedin.com/in/adnanzeros/

---

⭐ If you find this project useful, feel free to explore the repository.
