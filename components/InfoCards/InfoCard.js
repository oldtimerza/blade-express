import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class InfoCard extends React.Component {
  render() {
    if (this.props.imageUrl) {
      return (
        <Card>
          <CardImg top width="100%" src={this.props.imageUrl} />
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
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.text}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default InfoCard;
