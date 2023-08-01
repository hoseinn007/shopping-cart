import React from "react";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div class="menuItems">
        <button className="button product ">Products</button>
        <button className="button cart">Your Cart</button>
      </div>
    </nav>
  );
};
