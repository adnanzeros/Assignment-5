import React, { useState } from 'react';
import technologies from '../data/technologies.json';
import './technology.css';

const TechnologyCard = () => {
  // Selected technologies
  const [stack, setStack] = useState([]);

  // Add technology to stack
  const handleAddToStack = technology => {
    // Check if technology already exists
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
  };

  // Remove one technology
  const handleRemove = id => {
    setStack(stack.filter(item => item.id !== id));
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setStack([]);
  };

  // Check whether technology is already added
  const isAdded = id => {
    return stack.some(item => item.id === id);
  };

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


          {stack.length === 0 && (
            <div className="stack-empty">
              <div className="empty-icon">🧰</div>

              <p>Your stack is empty.</p>

              <span>Add technologies to build your stack.</span>
            </div>
          )}


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
