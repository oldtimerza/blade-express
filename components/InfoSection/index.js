import React from "react";
import { Container, Row, Col } from "reactstrap";

import css from "./styling.scss";

const descriptionTextStyle = {};

const childrenStyle = {};

const InfoSection = props => {
  return (
    <div className={css.spacer}>
      <Container>
        <Row>
          <Col>
            <div className={css.textContainerStyle}>
              <h2 className={css.summaryText}>{props.summary}</h2>
              <p className={css.descriptionTextStyle}>{props.description}</p>
            </div>
            <div style={childrenStyle}>{props.children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InfoSection;
