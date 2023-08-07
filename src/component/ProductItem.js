import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductItem.css";

export const ProductItem = ({ product }) => {
  const cart = useContext(CartContext);
  const productQty = cart.getItemQty(product.id);
  return (
    <div key={product.id} className="products_card">
      <span className="products_card_title">{product.name}</span>
      <span className="products_card_cost">{product.cost}$</span>
      {productQty.qty > 0 ? (
        <>
          <div className="">Quantity: {productQty.qty}</div>
          <button
            className="button changes-btn"
            onClick={() => cart.addToCart(product.id)}
          >
            +
          </button>
          <button
            className="button changes-btn"
            onClick={() => cart.removeFromCart(product.id)}
          >
            -
          </button>
          <button
            className="button product_remove-btn"
            onClick={() => cart.deleteFromCart(product.id)}
          >
            Remove from cart
          </button>
        </>
      ) : (
        <button className="button" onClick={() => cart.addToCart(product.id)}>
          Add to cart
        </button>
      )}
    </div>
  );
};
