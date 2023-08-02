import React, { useContext } from "react";
import "./NavBar.css";
import { CartContext } from "../context/CartContext";

export const NavBar = ({ showModal }) => {
  const cart = useContext(CartContext);
  return (
    <nav className="nav-bar">
      <div class="menuItems">
        <button className="button product ">Products</button>
        <button className="button cart-btn" onClick={showModal}>
          Your Cart&nbsp;&nbsp;
          {cart.totalQTY > 0 ? (
            <span className="cart-btn_qty">{cart.totalQTY}</span>
          ) : (
            ""
          )}
        </button>
      </div>
    </nav>
  );
};
