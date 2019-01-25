import React, { Component } from "react";

import { CartContext } from "../../contexts/cart-context";
import css from "./styling.scss";

class Icon extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {ctx => (
          <img src="../../static/icons/shopping-cart.svg" onClick={ctx.show} />
        )}
      </CartContext.Consumer>
    );
  }
}

export default Icon;
