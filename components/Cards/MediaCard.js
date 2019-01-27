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
        <Card className={css.card} onClick={this.props.imageClick}>
          <CardImg
            top
            width="100%"
            className={css.cardImage}
            src={this.props.imageUrl}
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
            {this.props.button}
          </CardBody>
        </Card>
      );
    }
    return (
      <Card>
        <div style={{ width: "100%", minHeight: "162px" }} />
        <CardBody>
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
