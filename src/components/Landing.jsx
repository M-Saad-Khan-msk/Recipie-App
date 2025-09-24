import React from 'react';
// import Header from './Header'; // Assuming Header.jsx is in the same directory

const Landing = () => {
  return (
    <div className="landing-page-container">
      <main className="landing-main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Your Daily Dose of Culinary Inspiration 🍲
            </h1>
            <p className="hero-subtitle">
              Discover, create, and share your favorite recipes with a passionate community of food lovers.
            </p>
            <div className="hero-actions">
              <a href="#recipes" className="cta-button primary">
                Explore Recipes
              </a>
              <a href="#submit" className="cta-button secondary">
                Add Your Own
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="card-image-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTI2MTl8MHwxfHNlYXJjaHwxfHxjdWxpbmFyeSUyMGxhbmRpbmclMjBwYWdlfGVufDB8fHx8MTY5NjY4NzYxNXww&ixlib=rb-4.0.3&q=80&w=1080"
              alt="Delicious and colorful meal" 
              className="card-image" 
            />
          </div>
        </section>

        <section className="info-section">
          <div className="info-card">
            <span className="info-icon">🔍</span>
            <h3 className="info-title">Discover</h3>
            <p className="info-text">
              Browse an extensive collection of recipes from chefs and home cooks worldwide.
            </p>
          </div>
          <div className="info-card">
            <span className="info-icon">👩‍🍳</span>
            <h3 className="info-title">Create</h3>
            <p className="info-text">
              Easily save your favorite recipes and build a personalized digital cookbook.
            </p>
          </div>
          <div className="info-card">
            <span className="info-icon">💬</span>
            <h3 className="info-title">Connect</h3>
            <p className="info-text">
              Join a vibrant community to share tips, tricks, and culinary stories.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;