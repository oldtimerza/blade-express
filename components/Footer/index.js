import React from "react";

import { Container, Col, Row } from "reactstrap";

const Footer = props => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <p>Contact details</p>
          <div style={{ minHeight: "200px" }} />
        </Col>
        <Col>
          <p>banking details</p>
          <div style={{ minHeight: "200px" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
