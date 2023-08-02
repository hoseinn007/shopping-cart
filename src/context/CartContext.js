import React, { createContext, useState } from "react";
import { getProductData } from "../component/Products";
const initialState = {
  items: [],
  getItemQTY: () => {},
  addToCart: () => {},
  removeFroCart: () => {},
  deleteFromCart: () => {},
  totalQTY: 0,
  getTotalCost: () => {},
};
export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQTY, setTotalQTY] = useState(0);

  const getItemQTY = (id) => {
    const QTY = cartItems.find((p) => (p.id === id ? p.QTY : ""));
    if (QTY === undefined) {
      return 0;
    }
  };
  const addToCart = (id) => {
    const QTY = getItemQTY(id);
    if (QTY === 0) {
      const pData = getProductData(id);
      // console.log(pData);
      setCartItems([
        ...cartItems,
        { id: id, QTY: 1, name: pData.name, price: pData.cost },
      ]);
      setTotalQTY(totalQTY + 1);
    } else {
      setCartItems(
        cartItems.map((p) => (p.id === id ? { ...p, QTY: p.QTY + 1 } : p))
      );
      setTotalQTY(totalQTY + 1);
    }
  };
  const removeFromCart = (id) => {
    const QTY = getItemQTY(id);
    if (QTY === 1) {
      deleteFromCart(id);
      setTotalQTY(totalQTY - 1);
    } else {
      setCartItems(
        cartItems.map((p) => (p.id === id ? { ...p, QTY: p.QTY - 1 } : p))
      );
      setTotalQTY(totalQTY - 1);
    }
  };

  const deleteFromCart = (id) => {
    setCartItems(cartItems.filter((p) => p.id !== id));
    const currentQTY = cartItems.map((p) => (p.id === id ? p.QTY : ""));
    setTotalQTY(totalQTY - currentQTY);
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
    totalQTY: totalQTY,
    getTotalCost,
  };
  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
};
