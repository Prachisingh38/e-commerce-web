import React, { useState } from "react";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ProductView from "./components/ProductView";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
  };

  const viewProduct = (product) => {
    setSelectedProduct(product);
  };

  const goBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      <header>
        <h1>My E-Commerce Store</h1>
      </header>
      <main className="container">
        {selectedProduct ? (
          <>
            <button onClick={goBack} style={{ marginBottom: "20px" }}>← Back</button>
            <ProductView product={selectedProduct} addToCart={addToCart} />
          </>
        ) : (
          <>
            <Home addToCart={addToCart} viewProduct={viewProduct} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
