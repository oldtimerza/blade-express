import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import PropTypes from "prop-types";

import css from "./styling.scss";

const MediaCard = props => {
  if (props.imageUrl) {
    return (
      <Card className={css.card}>
        <CardImg
          top
          width="100%"
          className={css.cardImage}
          src={props.imageUrl}
        />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.text}</CardText>
        </CardBody>
      </Card>
    );
  }
  return (
    <Card>
      <div style={{ width: "100%", minHeight: "162px" }} />
      <CardBody>
        <CardTitle className={css.cardTitle}>{props.title}</CardTitle>
        <CardText className={css.cartText}>{props.text}</CardText>
      </CardBody>
    </Card>
  );
};

MediaCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default MediaCard;
