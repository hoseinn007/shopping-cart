import React, { useContext } from "react";
import "./CartModal.css";
import { cartContext } from "../context/CartContext";

export const CartModal = ({ open, close }) => {
  const cart = useContext(cartContext);
  if (!open) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal_cart">
        <p className="modal_cart_close-btn" onClick={close}>
          X
        </p>
        <h1 className="modal_Cart_title">Your cart</h1>
        {cart.items.map((p) =>
          p.id !== 0 ? <div>kjhkjhkjh</div> : <div>dcghjfgh</div>
        )}
        <div>some description</div>
      </div>
    </div>
  );
};
