import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <section className="products-section">
      <h1>Hello products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </section>
  );
};

export const productsPath = "/products";
export default Products;
