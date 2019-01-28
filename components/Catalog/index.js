import { Component } from "react";
import PropTypes from "prop-types";
import { CardDeck, Card, Button } from "reactstrap";

import Loading from "../Loading";
import MediaCard from "../Cards/MediaCard";
import { CartContext } from "../../contexts/cart-context";

import css from "./styling.scss";

class Catalog extends Component {
  getCard = (product, addToCart) => {
    const button = (
      <Button
        className={css.cardButton}
        id="add-to-cart"
        onClick={() => addToCart(product.id, 1)}
      >
        Add to cart
      </Button>
    );
    return (
      <MediaCard
        imageUrl={product.imageUrl}
        title={product.title}
        text={product.cost}
        button={button}
      />
    );
  };

  generateCards = (products, addToCart) => {
    const { maxNumberOfColumns } = this.props;
    const count = products.length;
    const remainder = count % maxNumberOfColumns;
    let numberOfRows = (count - remainder) / maxNumberOfColumns;
    numberOfRows = numberOfRows === 1 ? numberOfRows : numberOfRows + 1;
    let rows = [];
    for (var j = 0; j < numberOfRows; j++) {
      let columns = [];
      for (var i = 0; i < maxNumberOfColumns; i++) {
        const index = i + j * maxNumberOfColumns;
        if (index < count) {
          columns.push(this.getCard(products[index], addToCart));
        } else {
          columns.push(<Card className={css.card} />);
        }
      }
      rows.push(
        <CardDeck key={i + j * maxNumberOfColumns}>{columns}</CardDeck>
      );
    }
    return rows;
  };

  render() {
    const { products } = this.props;
    if (products) {
      return (
        <CartContext.Consumer>
          {ctx => this.generateCards(products, ctx.addToCart)}
        </CartContext.Consumer>
      );
    }
    return <Loading />;
  }
}

Catalog.defaultProps = {
  maxNumberOfColumns: 5
};

Catalog.propTypes = {
  maxNumberOfColumns: PropTypes.number,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      cost: PropTypes.string
    })
  )
};

export default Catalog;
