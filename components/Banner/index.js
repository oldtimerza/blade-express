import { Jumbotron } from "reactstrap";

class Banner extends React.Component {
  render() {
    const minHeight = "500px";
    if (this.props.imageUrl) {
      const bannerStyle = {
        backgroundImage: 'url("' + this.props.imageUrl + '")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        minHeight: minHeight
      };
      return <Jumbotron style={bannerStyle} />;
    }
    const blankStyle = {
      minHeight: minHeight
    };
    return <Jumbotron style={blankStyle} />;
  }
}

export default Banner;
