import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

import css from "./styling.scss";

class InfoCard extends React.Component {
  render() {
    if (this.props.imageUrl) {
      return (
        <Card className={css.card}>
          <CardImg
            top
            width="100%"
            className={css.cardImage}
            src={this.props.imageUrl}
          />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
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

export default InfoCard;
