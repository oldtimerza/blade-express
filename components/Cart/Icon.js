import React, { Component } from "react";

import { CartContext } from "../../contexts/cart-context";
import Cart from "./";
import css from "./styling.scss";

class Icon extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {ctx => (
          <div className={css.icon}>
            <img
              src="../../static/icons/shopping-cart.svg"
              onClick={ctx.show}
            />
            {ctx.visible ? <Cart cart={ctx.cart} /> : null}
          </div>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Icon;
