import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  Button
} from "reactstrap";
import PropTypes from "prop-types";

import css from "./styling.scss";

class MediaCard extends Component {
  render() {
    if (this.props.imageUrl) {
      return (
        <Card
          id="media-card"
          className={css.card}
          onClick={this.props.imageClick}
        >
          <CardImg
            top
            width="100%"
            className={css.cardImage}
            src={this.props.imageUrl}
          />
          <CardBody className={css.cardBody}>
            <CardTitle className={css.cardTitle}>{this.props.title}</CardTitle>
            <CardText className={css.cardText}>{this.props.text}</CardText>
            {this.props.button}
          </CardBody>
        </Card>
      );
    }
    return (
      <Card className={css.card}>
        <CardBody className={css.cardBody}>
          <CardTitle className={css.cardTitle}>{this.props.title}</CardTitle>
          <CardText className={css.cartText}>{this.props.text}</CardText>
        </CardBody>
      </Card>
    );
  }
}

MediaCard.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  imageClick: PropTypes.func,
  button: PropTypes.instanceOf(Button)
};

export default MediaCard;
