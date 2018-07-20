import React from "react";
import { Container, Col, Row } from "reactstrap";

import Address from "./Address";
import ContactInformation from "./ContactInformation";

const Footer = props => {
  let { details } = props;
  return (
    <Container fluid>
      <Row>
        <Col xs="12" md="6">
          <Address
            addressLine1={details.addressLine1}
            addressLine2={details.addressLine2}
            city={details.city}
            province={details.province}
            postalCode={details.postalCode}
          />
        </Col>
        <Col xs="12" md="6">
          <ContactInformation
            telephone={details.telephone}
            fax={details.fax}
            email={details.email}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
