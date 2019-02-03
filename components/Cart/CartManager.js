import { Component } from "react";
import _ from "lodash";

import { CartContext } from "../../contexts/cart-context";
import CookieConstants from "../../constants/cookie-constants";

class CartManager extends Component {
  componentDidMount() {
    const {cookieService, moltinService, guidService} = this.props;
    var cartId = cookieService.get(CookieConstants.keys.cart_id);
    if (_.isEmpty(cartId)) {
      const guid = guidService.generate();
      cartId = guid;
      cookieService.set(CookieConstants.keys.cart_id, guid, { expires: 7 });
    }
    cartId = cookieService.get(CookieConstants.keys.cart_id) ["cart-id"];
    moltinService.getCart(cartId).then(cart => {
      moltinService.getCartItems(cartId).then(items => {
        cart.items = items;
        this.setState({
          cart,
          visible: false
        });
      });
    });
  };

  addToCart = cartId => (productId, quantity) => {
    this.props.moltinService
      .addToCart(cartId, productId, quantity)
      .then(cartItems => {
        const cart = this.state.cart;
        cart.items = cartItems;
        this.setState({
          cart: cart,
          visible: true
        });
      });
  };

  removeFromCart = cartId => (itemId, quantity) => {
    this.props.moltinService
      .removeFromCart(cartId, itemId, quantity)
      .then(cartItems => {
        const cart = this.state.cart;
        cart.items = cartItems;
        this.setState({
          cart,
          visible: true
        });
      });
  };

  show = () => {
    this.setState({ visible: true });
  };

  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    if (!this.state) {
      return this.props.children;
    }
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart(this.state.cart.data.id),
          removeFromCart: this.removeFromCart(this.state.cart.data.id),
          show: this.show,
          hide: this.hide,
          visible: this.state.visible
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export default CartManager;
