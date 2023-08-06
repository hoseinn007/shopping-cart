import React, { useContext } from "react";
import "./CartModal.css";
import { CartContext } from "../context/CartContext";

export const CartModal = ({ open, close }) => {
  const cart = useContext(CartContext);

  if (!open) {
    return null;
  }

  return (
    <div className="modal" onClick={close}>
      <div className="modal_cart" onClick={(e) => e.stopPropagation()}>
        <p className="modal_cart_close-btn" onClick={close}>
          X
        </p>
        <h1 className="modal_title">Your cart</h1>

        <div>
          {cart.items.map((p, index) =>
            p.qty > 0 ? (
              <div key={p.id} className="modal_items-wrapper">
                <button
                  className="button delete-btn"
                  onClick={() => cart.deleteFromCart(p.id)}
                >
                  X
                </button>
                <div className="modal_items-name">{p.name}</div>
                <button
                  className="button changes-btn"
                  onClick={() => cart.addToCart(p.id)}
                >
                  +
                </button>
                <button
                  className="button changes-btn"
                  onClick={() => cart.removeFromCart(p.id)}
                >
                  -
                </button>
                <div className="modal_items-qty">{p.qty}</div>
                <div className="modal_items-qty">{p.totalPrice}</div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        {cart.totalPrice > 0 ? (
          <div className="modal_total-cost">
            Total:
            {cart.totalPrice}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
