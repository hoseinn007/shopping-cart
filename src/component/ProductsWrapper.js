import React from "react";
import { Products } from "./Products";
import "./ProductsWrapper.css";
import { ProductItem } from "./ProductItem";

export const ProductsWrapper = () => {
  return (
    <span className="product-card-wrapper">
      {Products.map((p) => (
        <ProductItem product={p} />
      ))}
    </span>
  );
};
