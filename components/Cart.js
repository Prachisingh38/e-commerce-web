import React from "react";

function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No items in cart.</p>}

      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img 
            src={item.image} 
            alt={item.name} 
            style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "5px" }}
          />
          <div style={{ flex: 1, marginLeft: "10px" }}>
            <p>{item.name}</p>
            <p>₹ {item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Total: ₹ {total}</h3>
          <button 
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
            onClick={() => alert(`Checked out successfully! Total: ₹ ${total}`)}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
