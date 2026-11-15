import "./ProductCard.css";

function StarRating({ rating }) {
  // Show stars based on rating (out of 5)
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <span className="stars">
      {"★".repeat(fullStars)}
      {hasHalf && "½"}
      {"☆".repeat(emptyStars)}
    </span>
  );
}

function ProductCard({ product, onAddToCart, onToggleWishlist, isInWishlist, isInCart }) {
  // Calculate discount percentage
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      {/* Discount Badge */}
      {discount > 0 && <span className="discount-badge">-{discount}%</span>}

      {/* Wishlist Button */}
      <button
        className={`wishlist-btn ${isInWishlist ? "active" : ""}`}
        onClick={() => onToggleWishlist(product)}
        title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {isInWishlist ? "❤️" : "♡"}
      </button>

      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>

        {/* Rating */}
        <div className="product-rating">
          <StarRating rating={product.rating} />
          <span className="rating-number">{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="product-price">
          <span className="current-price">₹{product.price.toLocaleString()}</span>
          <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`add-to-cart-btn ${isInCart ? "in-cart" : ""}`}
          onClick={() => onAddToCart(product)}
        >
          {isInCart ? "✓ Added to Cart" : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
