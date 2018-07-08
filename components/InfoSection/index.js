import React from "react";

import { Container, Row, Col } from "reactstrap";

import { main } from "../theme";

const textContainerStyle = {
  width: "100%",
  padding: "auto",
  textAlign: "center !important"
};

const descriptionTextStyle = {};

const childrenStyle = {};

const InfoSection = props => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={textContainerStyle}>
            <h2 style={main.summaryText}>{props.summary}</h2>
            <p style={descriptionTextStyle}>{props.description}</p>
          </div>
          <div style={childrenStyle}>{props.children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default InfoSection;
