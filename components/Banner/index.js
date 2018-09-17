import React from "react";
import PropTypes from "prop-types";

import { Jumbotron } from "reactstrap";

const Banner = props => {
  const minHeight = "500px";
  if (props.imageUrl) {
    const bannerStyle = {
      backgroundImage: 'url("' + props.imageUrl + '")',
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
};

Banner.propTypes = {
  imageUrl: PropTypes.string
};

export default Banner;
