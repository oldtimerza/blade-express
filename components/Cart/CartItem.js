import { Component } from "react";
import PropTypes from "prop-types";
import { Container, Col, Row } from "reactstrap";

class CartItem extends Component {
  render() {
    const { product } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <img src={product.imageUrl} />
          </Col>
          <Col>{product.title}</Col>
          <Col>{product.cost}</Col>
          <Col>{product.quantity}</Col>
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
