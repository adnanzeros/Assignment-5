const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo + Brand */}
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
    </nav>
  );
};

export default Nav;
