import React from "react";

function ProductView({ product, addToCart }) {
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-view-card">
      <img src={product.image} alt={product.name} className="product-view-image" />
      <div className="product-view-details">
        <h2>{product.name}</h2>
        <p><strong>Price:</strong> ₹ {product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductView;
