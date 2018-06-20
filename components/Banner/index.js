import { Jumbotron } from "reactstrap";

const bannerStyle = {
  backgroundImage: 'url("/static/images/visa-application.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  minHeight: "500px"
};

const Banner = props => {
  return <Jumbotron style={bannerStyle} />;
};

export default Banner;
