import React from "react";
import "./NavBar.css";

export const NavBar = ({ showModal }) => {
  return (
    <nav className="nav-bar">
      <div class="menuItems">
        <button className="button product ">Products</button>
        <button className="button cart" onClick={showModal}>
          Your Cart
        </button>
      </div>
    </nav>
  );
};
