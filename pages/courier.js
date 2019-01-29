import React from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import Cards from "../components/Cards";

class Courier extends React.Component {
  render() {
    let domesticServiceCards = <div />;
    if (this.props && this.props.domesticServices) {
      domesticServiceCards = <Cards cards={this.props.domesticServices} />;
    }
    return (
      <div>
        <Section summary="Domestice services">{domesticServiceCards}</Section>
      </div>
    );
  }
}

Courier.getInitialProps = async function({ req, query, flameLinkService }) {
  const domesticServices = await flameLinkService.getContent("courier");
  console.log({ domesticServices });
  console.log({ image: domesticServices[0].image });
  const transformedDomesticServices = domesticServices.map(service => ({
    imageUrl: service.imageUrl,
    title: service.title,
    description: service.description
  }));
  return {
    domesticServices: transformedDomesticServices
  };
};

export default Courier;
