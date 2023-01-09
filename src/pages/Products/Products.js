import React from "react";
import "./Products.css";

import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section className="products-section">
      <h1>Hello products</h1>
      <ul>
        <li>
          <Link to={productsPath + "/p1"}>Product 1</Link>
        </li>
        <li>
          <Link to={productsPath + "/p2"}>Product 2</Link>
        </li>
        <li>
          <Link to={productsPath + "/p3"}>Product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export const productsPath = "/products";
export default Products;
