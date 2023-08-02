import React, { createContext, useState } from "react";
import { getProductData } from "../component/Products";
export const cartContext = createContext({
  items: [],
  getItemQTY: () => {},
  addToCart: () => {},
  removeFroCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState;

  const getItemQTY = (id) => {
    const QTY = cartItems.find((p) => (p.id === id ? p.QTY : ""));
    if (QTY === undefined) {
      return 0;
    }
  };
  const addToCart = (id) => {
    const QTY = getItemQTY(id);
    if (QTY === 0) {
      setCartItems([...cartItems, { id: id, QTY: 1 }]);
    } else {
      setCartItems(
        cartItems.map((p) => (p.id === id ? { ...p, QTY: p.QTY + 1 } : p))
      );
    }
  };
  const removeFromCart = (id) => {
    const QTY = getItemQTY(id);
    if (QTY === 1) {
      deleteFromCart(id);
    } else {
      setCartItems(
        cartItems.map((p) => (p.id === id ? { ...p, QTY: p.QTY - 1 } : p))
      );
    }
  };

  const deleteFromCart = (id) => {
    setCartItems(cartItems.filter((p) => p.id !== id));
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cartItems.map((p) => {
      const pData = getProductData(p.id);
      totalCost += pData.cost * p.QTY;
    });
    return totalCost;
  };

  const cartValues = {
    items: cartItems,
    getItemQTY,
    addToCart,
    removeFromCart,
    deleteFromCart,
    getTotalCost,
  };
  return (
    <cartContext.Provider value={cartValues}>{children}</cartContext.Provider>
  );
};
