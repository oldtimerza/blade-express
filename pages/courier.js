import React from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import Cards from "../components/Cards";
import CourierForm from "../components/Forms/Courier";

class Courier extends React.Component {
  render() {
    const { domesticServices, deliveryOptions, mailService } = this.props;
    let domesticServiceCards = <div />;
    if (domesticServices) {
      domesticServiceCards = <Cards cards={domesticServices} />;
    }
    return (
      <div>
        <Section summary="Domestic services">{domesticServiceCards}</Section>
        <Section summary="Request a quote">
          <CourierForm
            deliveryOptions={deliveryOptions}
            mailService={mailService}
          />
        </Section>
      </div>
    );
  }
}

Courier.getInitialProps = async function({ req, query, flameLinkService }) {
  const domesticServices = await flameLinkService.getContent("courier");
  const deliveryOptions = await flameLinkService.getContent("courierOptions");
  const transformedDomesticServices = domesticServices.map(service => ({
    imageUrl: service.imageUrl,
    title: service.title,
    description: service.description
  }));
  return {
    domesticServices: transformedDomesticServices,
    deliveryOptions
  };
};

export default Courier;
