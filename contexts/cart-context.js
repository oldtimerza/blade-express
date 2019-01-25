import React from "react";

export const CartContext = React.createContext({
  cart: null,
  addToCart: () => {},
  show: () => {},
  hide: () => {},
  visible: false
});
