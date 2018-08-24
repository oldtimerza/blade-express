import React from "react";

import { Container, Row, Col } from "reactstrap";

import Header from "../Header";
import Footer from "../Footer";
import { withLayout } from "./withLayout";

const Layout = props => (
  <div>
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
