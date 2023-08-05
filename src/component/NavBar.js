import React, { useContext } from "react";
import "./NavBar.css";
import { CartContext } from "../context/CartContext";

export const NavBar = ({ showModal }) => {
  const cart = useContext(CartContext);
  return (
    <nav className="nav-bar">
      <div className="menuItems">
        <button className="button product ">Products</button>
        <button className="button cart-btn" onClick={showModal}>
          Your Cart&nbsp;&nbsp;
          {cart.totalQty > 0 ? (
            <span className="cart-btn_qty">{cart.totalQty}</span>
          ) : (
            ""
          )}
        </button>
      </div>
    </nav>
  );
};
