import React from "react";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Our Recipe App 🍲</h2>
        <p className="about-text">
          Welcome to <span className="highlight">Recipe App</span> — your
          personal kitchen companion! Our goal is to make cooking fun, simple,
          and accessible to everyone.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>📖 Learn</h3>
            <p>
              Discover easy-to-follow recipes with step-by-step instructions.
              Perfect for beginners and pros alike.
            </p>
          </div>
          <div className="about-card">
            <h3>👩‍🍳 Create</h3>
            <p>
              Save your favorite recipes and even add your own personal touch.
            </p>
          </div>
          <div className="about-card">
            <h3>🌍 Share</h3>
            <p>
              Connect with friends and family by sharing your favorite meals.
            </p>
          </div>
        </div>

        <p className="about-footer">
          Built with ❤️ using <b>React.js</b> to help you learn components,
          props, and routing while enjoying food inspiration.
        </p>
      </div>
    </section>
  );
};

export default About;
