import React from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

const HomePage = props => {
  let infoCardComponent = <Loading />;
  let popularVisasComponent = null;
  if (props && props.results) {
    const firstResult = props.results[0];
    infoCardComponent = <Cards cards={firstResult.infoCardImages} />;
  }
  if (props && props.popularVisas) {
    const { popularVisas } = props;
    console.log(popularVisas);
    popularVisasComponent = <Cards cards={popularVisas} />;
  }
  return (
    <div>
      <Section
        summary="Our services"
        description="We provide a host of services"
      >
        {infoCardComponent}
      </Section>
      <Section summary="Most Popular">{popularVisasComponent}</Section>
    </div>
  );
};

HomePage.getInitialProps = async function({ req }) {
  const FlameLinkService = await require("../services/flamelink-service")
    .default;
  const res = await FlameLinkService.getStore().getContent("homePage");
  const popularVisas = await FlameLinkService.getStore().getContent(
    "popularVisas"
  );
  return {
    results: res,
    popularVisas
  };
};

HomePage.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({ infoCardImages: PropTypes.arrayOf(PropTypes.string) })
  ),
  popularVisas: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default HomePage;
