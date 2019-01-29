import React from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Catalog from "../components/Catalog";

const HomePage = props => {
  let infoCardComponent = <Loading />;
  let popularVisasComponent = null;
  if (props && props.results) {
    const firstResult = props.results[0];
    infoCardComponent = <Cards cards={firstResult.infoCardImages} />;
  }
  if (props && props.popularVisas) {
    const { popularVisas } = props;
    popularVisasComponent = <Catalog products={popularVisas} />;
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

HomePage.getInitialProps = async function({
  req,
  flameLinkService,
  moltinService
}) {
  const res = await flameLinkService.getContent("homePage");
  const mostPopularCollection = await moltinService.getCollection(
    "most-popular"
  );
  let popularVisas = [];
  if (
    mostPopularCollection &&
    mostPopularCollection.data &&
    mostPopularCollection.data.length
  ) {
    popularVisas = await moltinService.getProducts({
      filter: {
        collection: { id: mostPopularCollection.data[0].id }
      }
    });
  }
  const popularVisaSummaries = popularVisas.data.map(product => ({
    imageUrl: product.imageurl,
    title: product.name,
    cost: product.price[0].amount,
    id: product.id
  }));
  return {
    results: res,
    popularVisas: popularVisaSummaries
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
