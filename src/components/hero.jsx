import './hero.css';
import bannerStack from '../assets/banner-stack.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="hero-btn primary-btn">
              Explore Technologies
            </a>

            <a href="#about" className="hero-btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src={bannerStack} alt="Development Stack" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
