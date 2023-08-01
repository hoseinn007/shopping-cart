import React from "react";
import { Products } from "./Products";
import "./ProductsWrapper.css";

export const ProductsWrapper = () => {
  return (
    <span className="product-card-wrapper">
      {Products.map((product) => (
        <div className="products_card">
          <span className="products_card_title">{product.name}</span>
          <span className="products_card_cost">{product.cost}$</span>
          <button>Add to cart</button>
        </div>
      ))}
    </span>
  );
};
