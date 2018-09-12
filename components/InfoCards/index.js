import React from "react";
import PropTypes from "prop-types";
import { CardDeck, Card } from "reactstrap";

import InfoCard from "./InfoCard";

const InfoCards = props => {
  const { maxNumberOfColumns, cards } = props;
  const count = cards.length;
  const remainder = count % maxNumberOfColumns;
  const numberOfRows = (count - remainder) / maxNumberOfColumns;
  let rows = [];
  for (var j = 0; j < numberOfRows + 1; j++) {
    let columns = [];
    for (var i = 0; i < maxNumberOfColumns; i++) {
      const index = i + j * maxNumberOfColumns;
      if (index < count) {
        columns.push(
          <InfoCard
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

InfoCards.defaultProps = {
  maxNumberOfColumns: 3
};

InfoCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  ),
  maxNumberOfColumns: PropTypes.number
};

export default InfoCards;
