import React, { createContext, useState } from "react";
import { getProductData } from "../component/Products";
const getInitialState = () => {
  const inHereCart = localStorage.getItem("Your Cart");
  const lastCart = JSON.parse(inHereCart);
  return inHereCart ? lastCart : [];
};
const initialState = {
  items: [],
  getItemQty: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  deleteFromCart: () => {},
  totalQty: 0,
  totalPrice: 0,
};
export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialState);

  const getItemQty = (id) => {
    const qty = cartItems.find((p) => (p.id === id ? p.qty : undefined));
    console.log("get item qty context", qty);
    if (qty === undefined) {
      return 0;
    }
    return qty;
  };
  const addToCart = (id) => {
    const qty = getItemQty(id);
    if (qty === 0) {
      const pData = getProductData(id);
      setCartItems([
        ...cartItems,
        {
          id: pData.id,
          qty: 1,
          name: pData.name,
          price: pData.cost,
          totalPrice: pData.cost,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((p) =>
          p.id === id
            ? { ...p, qty: p.qty + 1, totalPrice: p.totalPrice + p.price }
            : p
        )
      );
    }
  };
  const removeFromCart = (id) => {
    const qty = getItemQty(id);
    // console.log("context qty", qty.qty);
    if (qty.qty === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((p) =>
          p.id === id
            ? { ...p, qty: p.qty - 1, totalPrice: p.totalPrice - p.price }
            : p
        )
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartItems(cartItems.filter((p) => p.id !== id));
  };

  let totalPrice = 0;
  let totalQty = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].totalPrice;
    totalQty += cartItems[i].qty;
  }

  const cartValues = {
    items: cartItems,
    getItemQty,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalQty: totalQty,
    totalPrice: totalPrice,
  };
  localStorage.setItem("Your Cart", JSON.stringify(cartItems));
  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};
