# 🚀 DevStack

DevStack is a simple and user-friendly technology stack management website built with React. Users can explore different technologies, select their favorite technologies, and build their own development stack.

## ✨ Features

* 🔍 **Explore Technologies** — Browse different technologies and their details.
* ➕ **Build Your Stack** — Add technologies to your personal development stack.
* 🗑️ **Manage Your Stack** — Easily remove technologies from your selected stack.

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML5
* CSS3
* JSON
* React Hooks (`useState`, `useEffect`)
*vite

---

# 📚 React Questions & Answers

 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX to make UI code easier to write and understand
2. What is the difference between props and state?

Props are data passed from a parent component to a child component.
State is data managed inside a component that can change over time.

 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and manage changing data in a React component.

I used `useState` to manage the technology list, loading state, and selected technologies.

4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch and load the technology data from the JSON file when the component loads.

 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React efficiently update the correct item when the list changes.

 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, I used it to show an empty stack message when no technology is selected:

jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  selectedTechnologies.map((technology) => (
    <div key={technology.id}>{technology.name}</div>
  ))
)}


 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send something back by calling a function that the parent passes to it as a prop.

For example:

jsx
<Child onSelect={handleSelect} />


The child can then call:

jsx
onSelect(data);


This allows the child to send data back to the parent.

---

## 👨‍💻 Project

**Project Name:** DevStack
**Built With:** React.js
**Purpose:** Technology stack management and exploration
