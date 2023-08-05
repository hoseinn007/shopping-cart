import React, { useContext } from "react";
import { Products } from "./Products";
import "./ProductsWrapper.css";
import { CartContext } from "../context/CartContext";

export const ProductsWrapper = () => {
  const cart = useContext(CartContext);

  return (
    <span className="product-card-wrapper">
      {Products.map((p) => (
        <div key={p.id} className="products_card">
          <span className="products_card_title">{p.name}</span>
          <span className="products_card_cost">{p.cost}$</span>
          <button className="button" onClick={() => cart.addToCart(p.id)}>
            Add to cart
          </button>
        </div>
      ))}
    </span>
  );
};
