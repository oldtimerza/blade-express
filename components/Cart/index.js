import { Component } from "react";
import { Container, Col, Row } from "reactstrap";

import CartItem from "./CartItem";
import css from "./styling.scss";

class Cart extends Component {
  render() {
    const { cart } = this.props;
    console.log({ Cart: cart });
    return (
      <Container>
        <Row>
          <Col>
            <div className={css.cart}>
              {cart && cart.items
                ? cart.items.data.map(item => {
                    const product = {
                      title: item.name,
                      imageUrl: item.image.href,
                      cost: item.meta.display_price.with_tax.unit.formatted,
                      quantity: item.quantity
                    };
                    return <CartItem product={product} />;
                  })
                : null}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
