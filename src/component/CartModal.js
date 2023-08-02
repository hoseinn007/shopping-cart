import React, { useContext } from "react";
import "./CartModal.css";
import { CartContext } from "../context/CartContext";
import { getProductData } from "./Products";

export const CartModal = ({ open, close }) => {
  const cart = useContext(CartContext);
  // console.log("modal", cart.items);
  if (!open) {
    return null;
  }
  const itemPrice = (id) => {
    const price = cart.items.map((p) => (p.id === id ? p.QTY * p.price : ""));
    // console.log("price", price);
    return price;
  };
  const addClickHanler = (id) => {
    // const addItem = ;
    // return addItem;
  };
  return (
    <div className="modal">
      <div className="modal_cart">
        <p className="modal_cart_close-btn" onClick={close}>
          X
        </p>
        <h1 className="modal_title">Your cart</h1>

        <div>
          {cart.items.map((p) =>
            p.QTY > 0 ? (
              <div className="modal_items-wrapper">
                <div className="modal_items-name">{p.name}</div>
                <button className="button changes-btn">+</button>
                <button className="button changes-btn">-</button>
                <div className="modal_items-qty">{p.QTY}</div>
                <div className="modal_items-qty">{itemPrice(p.id)}</div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        {/* <div className="modal_total-cost">asda{cart.getTotalCost}</div> */}
      </div>
    </div>
  );
};
