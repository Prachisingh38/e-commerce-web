import React from "react";

function ProductCard({ product, addToCart, viewProduct }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => viewProduct(product)}
      />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
