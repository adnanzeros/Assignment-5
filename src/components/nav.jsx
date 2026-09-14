import React, { useState } from 'react';
import '../App.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-container">
        {/* Logo Brand */}
        <a href="#home" className="nav-brand">
          <span className="brand-logo">DS</span>

          <span className="brand-name">
            Dev <span>Stack</span>
          </span>
        </a>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>

          <li>
            <a href="#technologies">Technologies</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Sign In / Sign Up */}
        <div className="nav-auth">
          <a href="#signin" className="sign-in">
            Sign In
          </a>

          <a href="#signup" className="sign-up">
            Sign Up
          </a>
        </div>
      </div>


      <div className="mobile-nav">
        {/* Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Center Logo */}
        <a href="#home" className="mobile-brand">
          <span className="mobile-brand-logo">DS</span>

          <span className="mobile-brand-name">
            Dev<span>Stack</span>
          </span>
        </a>

        {/* Mobile Auth */}
        <div className="mobile-auth">
          <a href="#signin" className="mobile-signin">
            Sign In
          </a>

          <a href="#signup" className="mobile-signup">
            Sign Up
          </a>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#technologies" onClick={() => setMenuOpen(false)}>
            Technologies
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
