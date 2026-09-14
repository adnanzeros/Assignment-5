import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="footer-logo-box">DS</span>

            <span className="footer-brand-name">
              Dev <span>Stack</span>
            </span>
          </a>

          <p className="footer-description">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="footer-socials">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

        
        <div className="footer-column">
          <h3>PRODUCT</h3>

          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-column">
          <h3>COMPANY</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="footer-column">
          <h3>LEGAL</h3>

          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>


      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
