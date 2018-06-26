import { CardDeck } from "reactstrap";

import InfoCard from "./InfoCard";

const InfoCards = props => {
  const cards = props.cards
    ? props.cards.map(card => (
        <InfoCard
          imageUrl={card.imageUrl}
          title={card.title}
          key={card.uniqueKey}
          text={card.description}
        />
      ))
    : [];
  return <CardDeck>{cards}</CardDeck>;
};

export default InfoCards;
