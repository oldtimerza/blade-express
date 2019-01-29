import React from "react";

export const CartContext = React.createContext({
  cart: null,
  addToCart: () => {},
  removeFromCart: () => {},
  show: () => {},
  hide: () => {},
  visible: false
});
