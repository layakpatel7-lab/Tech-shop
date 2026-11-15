import { useState } from "react";
import "./Navbar.css";

function Navbar({ cartCount, wishlistCount, onCartClick, onWishlistClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">TechShop</span>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text" placeholder="Search products..." />
          <button className="search-btn">🔍</button>
        </div>

        {/* Nav Actions */}
        <div className="navbar-actions">
          <button className="nav-btn" onClick={onWishlistClick}>
            <span className="nav-icon">♡</span>
            <span className="nav-label">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="badge">{wishlistCount}</span>
            )}
          </button>

          <button className="nav-btn" onClick={onCartClick}>
            <span className="nav-icon">🛒</span>
            <span className="nav-label">Cart</span>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

