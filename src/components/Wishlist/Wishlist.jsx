import "./Wishlist.css";

function Wishlist({ wishlistItems, onClose, onRemove, onAddToCart }) {
  return (
    <div className="wishlist-overlay" onClick={onClose}>
      <div className="wishlist-panel" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="wishlist-header">
          <h2>♡ Your Wishlist ({wishlistItems.length})</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Items */}
        {wishlistItems.length === 0 ? (
          <div className="wishlist-empty">
            <span className="empty-icon">♡</span>
            <p>Your wishlist is empty</p>
            <button className="continue-btn" onClick={onClose}>Browse Products</button>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlistItems.map((item) => (
              <div className="wishlist-item" key={item.id}>
                <img src={item.image} alt={item.name} className="wishlist-item-img" />
                <div className="wishlist-item-info">
                  <h4>{item.name}</h4>
                  <span className="wishlist-item-brand">{item.brand}</span>
                  <span className="wishlist-item-price">₹{item.price.toLocaleString()}</span>
                </div>
                <div className="wishlist-item-actions">
                  <button className="move-to-cart-btn" onClick={() => onAddToCart(item)}>
                    🛒 Add
                  </button>
                  <button className="remove-wish-btn" onClick={() => onRemove(item.id)}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
