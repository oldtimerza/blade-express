import { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row, Media } from "reactstrap";

import css from "./styling.scss";

class CartItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <Container id="cart-item">
        <Row>
          <Col>
            <Media
              image
              left
              middle
              className={css.image}
              src={product.imageUrl}
            />
          </Col>
          <Col id="title">{product.title}</Col>
          <Col id="cost">{product.cost}</Col>
          <Col id="quantity">{product.quantity}</Col>
        </Row>
      </Container>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    cost: PropTypes.string,
    quantity: PropTypes.number
  })
};

export default CartItem;
