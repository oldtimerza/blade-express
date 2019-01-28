import React from "react";
import PropTypes from "prop-types";
import { CardDeck, Card } from "reactstrap";

import MediaCard from "./MediaCard";

const Cards = props => {
  const { maxNumberOfColumns, cards } = props;
  const count = cards.length;
  const remainder = count % maxNumberOfColumns;
  const numberOfRows = (count - remainder) / maxNumberOfColumns;
  let rows = [];
  for (var j = 0; j < numberOfRows; j++) {
    let columns = [];
    for (var i = 0; i < maxNumberOfColumns; i++) {
      const index = i + j * maxNumberOfColumns;
      if (index < count) {
        columns.push(
          <MediaCard
            imageUrl={cards[index].imageUrl}
            title={cards[index].title}
            text={cards[index].description}
          />
        );
      } else {
        columns.push(<Card />);
      }
    }
    rows.push(<CardDeck key={i + j * maxNumberOfColumns}>{columns}</CardDeck>);
  }
  return <div>{rows}</div>;
};

Cards.defaultProps = {
  maxNumberOfColumns: 3
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  maxNumberOfColumns: PropTypes.number
};

export default Cards;
