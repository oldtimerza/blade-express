import Header from "../Header";
import Footer from "../Footer";
import { withLayout } from "./withLayout";

const contentStyle = {};

const Layout = props => (
  <div>
    <Header />
    <div style={contentStyle}>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
export { withLayout };
