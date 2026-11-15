import "./Cart.css";

function Cart({ cartItems, onClose, onRemove, onUpdateQty }) {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        {/* Cart Header */}
        <div className="cart-header">
          <h2>🛒 Your Cart ({totalItems})</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* Cart Items */}
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="empty-icon">🛒</span>
            <p>Your cart is empty</p>
            <button className="continue-btn" onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-brand">{item.brand}</span>
                    <span className="cart-item-price">₹{item.price.toLocaleString()}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => onRemove(item.id)}>
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Footer with Total */}
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span className="total-amount">₹{totalPrice.toLocaleString()}</span>
              </div>
              <button className="checkout-btn">Checkout →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
