import React from "react";
import { Container, Col, Row } from "reactstrap";

import Address from "./Address";
import ContactInformation from "./ContactInformation";
import NavMenu from "./NavMenu";
import css from "./styling.scss";

const Footer = props => {
  let { details, menus } = props;
  return (
    <div className={css.containing_div}>
      <Container fluid>
        <Row>
          <Col xs="12" md="6">
            <NavMenu menus={menus} />
          </Col>
          <Col xs="12" md="3">
            <Address
              addressLine1={details.addressLine1}
              addressLine2={details.addressLine2}
              city={details.city}
              province={details.province}
              postalCode={details.postalCode}
            />
          </Col>
          <Col xs="12" md="3">
            <ContactInformation
              telephone={details.telephone}
              fax={details.fax}
              email={details.email}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
