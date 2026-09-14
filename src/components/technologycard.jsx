import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import technologiesUrl from '../data/technologies.json?url';
import './technology.css';

const TechnologyCard = () => {
  // Technologies loaded from JSON
  const [technologies, setTechnologies] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Selected technologies
  const [stack, setStack] = useState([]);

  // Load technologies from JSON
  useEffect(() => {
    fetch(technologiesUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch technologies');
        }

        return response.json();
      })
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading technologies:', error);
        setLoading(false);
        toast.error('Failed to load technologies!');
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = technology => {
    // Check if technology already exists
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const handleRemove = id => {
    const technology = stack.find(item => item.id === id);

    setStack(stack.filter(item => item.id !== id));

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);

    toast.info('All technologies removed from your stack!');
  };

  // Check whether technology is already added
  const isAdded = id => {
    return stack.some(item => item.id === id);
  };

  // Show loading message while JSON is loading
  if (loading) {
    return (
      <section className="technology-section">
        <div className="technology-wrapper">
          <div className="technology-main">
            <div className="technology-header">
              <h1>Loading Technologies...</h1>

              <p>Please wait while the technologies are loading.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="technology-section">
      <div className="technology-wrapper">
        <div className="technology-main">
          {/* Section Header */}
          <div className="technology-header">
            <h1>
              Explore the <span>Technologies</span>
            </h1>

            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          {/* Technology Grid */}
          <div className="technology-grid">
            {technologies.map(technology => {
              const added = isAdded(technology.id);

              return (
                <div className="technology-card" key={technology.id}>
                  {/* Card Top */}
                  <div className="technology-card-top">
                    {/* Icon */}
                    <div className="technology-icon">
                      <img
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                      />
                    </div>

                    {/* Badge */}
                    <span className="technology-badge">{technology.badge}</span>
                  </div>

                  {/* Name */}
                  <h3 className="technology-name">{technology.name}</h3>

                  {/* Description */}
                  <p className="technology-description">
                    {technology.description}
                  </p>

                  {/* Card Bottom Information */}
                  <div className="technology-info">
                    {/* Category */}
                    <span className="category-chip">{technology.category}</span>

                    {/* Difficulty */}
                    <span className="difficulty">{technology.difficulty}</span>

                    {/* Rating */}
                    <span className="rating">
                      <span className="rating-star">★</span>

                      {technology.rating}
                    </span>
                  </div>

                  {/* Add To Stack Button */}
                  <button
                    className={`add-stack-btn ${added ? 'added' : ''}`}
                    onClick={() => handleAddToStack(technology)}
                    disabled={added}
                  >
                    {added ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Your Stack */}
        <aside className="your-stack">
          {/* Stack Header */}
          <div className="stack-header">
            <div>
              <h2>Your Stack</h2>

              <p>
                {stack.length === 0
                  ? 'No technologies selected yet.'
                  : `${stack.length} ${
                      stack.length === 1 ? 'Technology' : 'Technologies'
                    } Selected`}
              </p>
            </div>
          </div>

          {/* Empty Stack */}
          {stack.length === 0 && (
            <div className="stack-empty">
              <div className="empty-icon">🧰</div>

              <p>Your stack is empty.</p>

              <span>Add technologies to build your stack.</span>
            </div>
          )}

          {/* Stack Content */}
          {stack.length > 0 && (
            <div className="stack-content">
              {stack.map(technology => (
                <div className="stack-item" key={technology.id}>
                  {/* Stack Item Left */}
                  <div className="stack-item-info">
                    {/* Icon */}
                    <div className="stack-item-icon">
                      <img src={technology.icon} alt={technology.name} />
                    </div>

                    {/* Name + Category */}
                    <div className="stack-item-details">
                      <h3>{technology.name}</h3>

                      <span>{technology.category}</span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="remove-item-btn"
                    onClick={() => handleRemove(technology.id)}
                    aria-label={`Remove ${technology.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* Remove All */}
              <button className="remove-all-btn" onClick={handleRemoveAll}>
                Remove All
              </button>
            </div>
          )}
        </aside>
      </div>
    </section>
  );
};

export default TechnologyCard;
