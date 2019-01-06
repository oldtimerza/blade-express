import { Component } from "react";
import _ from "lodash";

import CookieService from "../../services/cookie-service";
import GuidService from "../../services/guid-service";
import CookieConstants from "../../constants/cookie-constants";
import { CartContext } from "../../contexts/cart-context";

class CartManager extends Component {
  componentDidMount() {
    const cookieService = new CookieService();
    var cartId = cookieService.get(CookieConstants.keys.cart_id);
    if (_.isEmpty(cartId)) {
      const guidService = new GuidService();
      const guid = guidService.generate();
      cartId = guid;
      cookieService.set(CookieConstants.keys.cart_id, guid, { expires: 7 });
    }

    this.props.moltinService.getCart().then(cart =>
      this.setState({
        cart: cart.data
      })
    );
  }

  addToCart = cartId => (productId, quantity) => {
    this.props.moltinService
      .addToCart(cartId, productId, quantity)
      .then(cartItems => {
        const cart = this.state.cart;
        cart.items = cartItems;
        this.setState({
          cart
        });
      });
  };

  render() {
    if (!this.state) {
      return this.props.children;
    }
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart(this.state.cart.id)
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartManager;