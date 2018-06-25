import { Jumbotron } from "reactstrap";

import Loading from "../Loading";
import FlameLinkStore from "../../static/js/flamelink-store";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null
    };
  }

  componentDidMount() {
    if (this.props.imageReference) {
      FlameLinkStore.getInstance()
        .getUrl(this.props.imageReference)
        .then(response => {
          this.setState({ imageUrl: response });
        });
    }
  }

  render() {
    const minHeight = "500px";
    if (this.state.imageUrl) {
      const bannerStyle = {
        backgroundImage: 'url("' + this.state.imageUrl + '")',
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
