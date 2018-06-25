import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

import FlameLinkStore from "../../static/js/flamelink-store";

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null
    };
  }

  componentDidMount() {
    if (this.props.imageRef) {
      FlameLinkStore.getInstance()
        .getUrl(this.props.imageRef)
        .then(response => {
          this.setState({ imageUrl: response });
        });
    }
  }

  render() {
    if (this.state.imageUrl) {
      return (
        <Card>
          <CardImg top width="100%" src={this.state.imageUrl} />
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
          </CardBody>
        </Card>
      );
    }
    return (
      <Card>
        <div style={{ width: "100%", minHeight: "162px" }} />
        <CardBody>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.text}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default InfoCard;
