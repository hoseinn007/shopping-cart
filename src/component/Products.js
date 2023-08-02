import React from "react";

export const Products = [
  { id: "1", name: "Television", cost: 500 },
  { id: "2", name: "Mobile", cost: 400 },
  { id: "3", name: "Carpet", cost: 600 },
  { id: "4", name: "Table", cost: 200 },
];
export const getProductData = (id) => {
  const pData = Products.find((p) => p.id === id);
  if (pData === undefined) {
    return undefined;
  }
  return pData;
};
