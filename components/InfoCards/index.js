import React from "react";
import PropTypes from "prop-types";
import { CardDeck } from "reactstrap";

import InfoCard from "./InfoCard";

const InfoCards = props => {
  const { maxNumberOfColumns, cards } = props;
  const count = cards.length;
  const remainder = count % maxNumberOfColumns;
  const numberOfRows = (count - remainder) / maxNumberOfColumns;
  let rows = [];
  for (var j = 0; j < numberOfRows; j++) {
    let columns = [];
    for (var i = 0; i < maxNumberOfColumns; i++) {
      columns.push(
        <InfoCard
          imageUrl={cards[i].imageUrl}
          title={cards[i].title}
          text={cards[i].description}
        />
      );
    }
    rows.push(<CardDeck key={j}>{columns}</CardDeck>);
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
