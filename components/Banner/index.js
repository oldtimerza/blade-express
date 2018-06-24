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
    if (this.state.imageUrl) {
      const bannerStyle = {
        backgroundImage: 'url("' + this.state.imageUrl + '")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        minHeight: "500px"
      };
      return <Jumbotron style={bannerStyle} />;
    }
    return <Loading />;
  }
}

export default Banner;
