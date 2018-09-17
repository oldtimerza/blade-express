import React from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";
import css from "./styling.scss";

const Layout = props => (
  <div>
    <Alert color="warning">
      Please note: This site is in active development and does not currently
      represent it's final state.
    </Alert>
    <Header menus={props.menus} />
    {props.banner}
    <Container className={css.body} fluid>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
    <Footer className={css.footer} details={props.footer} menus={props.menus} />
  </div>
);

Layout.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({})),
  banner: PropTypes.instanceOf(React.Component),
  children: PropTypes.arrayOf(PropTypes.instanceOf(React.Component)),
  footer: PropTypes.instanceOf(React.Component)
};

export default Layout;
