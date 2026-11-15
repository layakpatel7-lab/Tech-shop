import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">🔥 New Arrivals</span>
        <h1 className="hero-title">
          Premium Tech <br />
          <span className="highlight">At Best Prices</span>
        </h1>
        <p className="hero-subtitle">
          Discover the latest gadgets, accessories, and electronics.
          Free shipping on orders above ₹2000!
        </p>
        <div className="hero-buttons">
          <a href="#products" className="btn-primary">Shop Now →</a>
          <a href="#products" className="btn-secondary">View Deals</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">500+</span>
          <span className="stat-label">Products</span>
        </div>
        <div className="stat">
          <span className="stat-number">50k+</span>
          <span className="stat-label">Happy Customers</span>
        </div>
        <div className="stat">
          <span className="stat-number">4.8★</span>
          <span className="stat-label">Average Rating</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
