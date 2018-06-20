import { Container, Row, Col } from "reactstrap";

import Header from "../Header";
import Footer from "../Footer";
import { withLayout } from "./withLayout";

const Layout = props => (
  <div>
    <Header />
    {props.banner}
    <Container>
      <Row>
        <Col sm="12" md={{ size: 12, offset: 2 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Layout;
export { withLayout };
