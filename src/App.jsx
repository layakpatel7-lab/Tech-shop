import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import products from "./data/products";
import "./App.css";

function App() {
  // ---- State ----
  const [cart, setCart] = useState([]);           // items in cart (with qty)
  const [wishlist, setWishlist] = useState([]);   // items in wishlist
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  // ---- Cart Functions ----
  function addToCart(product) {
    setCart((prev) => {
      // If already in cart, increase qty
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Otherwise add new item with qty 1
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateCartQty(productId, newQty) {
    if (newQty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, qty: newQty } : item
      )
    );
  }

  // ---- Wishlist Functions ----
  function toggleWishlist(product) {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        // Remove from wishlist
        return prev.filter((item) => item.id !== product.id);
      }
      // Add to wishlist
      return [...prev, product];
    });
  }

  function removeFromWishlist(productId) {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  }

  // ---- Helper: check if item is in cart/wishlist ----
  function isInCart(productId) {
    return cart.some((item) => item.id === productId);
  }

  function isInWishlist(productId) {
    return wishlist.some((item) => item.id === productId);
  }

  // Count total items in cart
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="app">
      {/* Navigation Bar */}
      <Navbar
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setShowCart(true)}
        onWishlistClick={() => setShowWishlist(true)}
      />

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">🔥 Trending Products</h2>
          <p className="section-subtitle">Top picks from our tech collection</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onToggleWishlist={toggleWishlist}
              isInCart={isInCart(product.id)}
              isInWishlist={isInWishlist(product.id)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>⚡ TechShop © 2026 — Built with React</p>
      </footer>

      {/* Cart Sidebar (shows when open) */}
      {showCart && (
        <Cart
          cartItems={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onUpdateQty={updateCartQty}
        />
      )}

      {/* Wishlist Sidebar (shows when open) */}
      {showWishlist && (
        <Wishlist
          wishlistItems={wishlist}
          onClose={() => setShowWishlist(false)}
          onRemove={removeFromWishlist}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default App;
