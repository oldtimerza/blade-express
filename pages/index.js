import React from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const HomePage = props => {
  if (props && props.results) {
    const firstResult = props.results[0];
    const infoCardComponent = <Cards cards={firstResult.infoCardImages} />;

    return (
      <Section
        summary="Our services"
        description="We provide a host of services"
      >
        {infoCardComponent}
      </Section>
    );
  }
  return <Loading />;
};

HomePage.getInitialProps = async function({ req }) {
  const FlameLinkService = await require("../services/flamelink-service")
    .default;
  const res = await FlameLinkService.getStore().getContent("homePage");
  return {
    results: res
  };
};

HomePage.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({ infoCardImages: PropTypes.arrayOf(PropTypes.string) })
  )
};

export default HomePage;
