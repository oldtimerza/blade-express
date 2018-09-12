import React from "react";

import { Container, Row, Col, Alert } from "reactstrap";

import Header from "../Header";
import Footer from "../Footer";
import { withLayout } from "./withLayout";

const Layout = props => (
  <div>
    <Alert color="warning">
      Please note: This site is in active development and does not currently
      represent it's final state.
    </Alert>
    <Header menus={props.menus} />
    {props.banner}
    <Container fluid>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
    <Footer details={props.footer} menus={props.menus} />
  </div>
);

export default Layout;
export { withLayout };
