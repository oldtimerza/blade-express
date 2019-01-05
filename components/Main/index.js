import { Component } from "react";
import _ from "lodash";

import CookieService from "../../services/cookie-service";
import GuidService from "../../services/guid-service";
import CookieConstants from "../../constants/cookie-constants";
import { CartContext } from "../../contexts/cart-context";

class Main extends Component {
  componentDidMount() {
    const cookieService = new CookieService();
    var cartId = cookieService.get(CookieConstants.keys.cart_id);
    if (_.isEmpty(cartId)) {
      const guidService = new GuidService();
      const guid = guidService.generate();
      cartId = guid;
      cookieService.set(CookieConstants.keys.cart_id, guid, { expires: 7 });
    }
    this.setState({
      cartId
    });
  }

  render() {
    return <CartContext.Provider>{this.props.children}</CartContext.Provider>;
  }
}

export default Main;
