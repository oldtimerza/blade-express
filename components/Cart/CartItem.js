import { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row, Media, Button } from "reactstrap";

import css from "./styling.scss";

class CartItem extends Component {
  render() {
    const { product, onRemove } = this.props;
    const removeButton = (
      <Button onClick={() => onRemove()} className={css.removeButton}>
        X
      </Button>
    );
    return (
      <Container id="cart-item">
        <Row>
          <Col xs="3">
            <Media
              image
              left
              middle
              className={css.image}
              src={product.imageUrl}
            />
          </Col>
          <Col id="title" className={css.title} xs="3">
            {product.title}
          </Col>
          <Col id="cost" className={css.cost} xs="2">
            {product.cost}
          </Col>
          <Col id="quantity" className={css.quantity} xs="1">
            {product.quantity}
          </Col>
          <Col id="remove" className={css.remove} xs="3">
            {removeButton}
          </Col>
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
  }),
  onRemove: PropTypes.func
};

export default CartItem;
