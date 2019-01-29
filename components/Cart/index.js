import { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import CartItem from "./CartItem";
import css from "./styling.scss";
import { CartContext } from "../../contexts/cart-context";

class Cart extends Component {
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = onOutsideClick => node => {
    this.wrapperRef = node;
    this.onOutsideClick = onOutsideClick;
  };

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.onOutsideClick();
    }
  };

  render() {
    const { cart } = this.props;
    return (
      <CartContext.Consumer>
        {ctx => {
          if (ctx.visible) {
            return (
              <div
                id="cart"
                className={css.cart}
                ref={this.setWrapperRef(ctx.hide)}
              >
                <Container>
                  <Row>
                    <Col>
                      {cart && cart.items ? (
                        cart.items.data.map(item => {
                          const product = {
                            title: item.name,
                            imageUrl: item.image.href,
                            cost:
                              item.meta.display_price.with_tax.value.formatted,
                            quantity: item.quantity
                          };
                          return (
                            <CartItem
                              product={product}
                              onRemove={() => ctx.removeFromCart(item.id, 1)}
                            />
                          );
                        })
                      ) : (
                        <p> Your cart is empty.</p>
                      )}
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          } else {
            return <div />;
          }
        }}
      </CartContext.Consumer>
    );
  }
}

export default Cart;
