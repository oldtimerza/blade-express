import React from "react";

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
  const FlameLinkStore = await require("../static/js/flamelink-store").default;
  const res = await FlameLinkStore.getStore().getContent("homePage");
  return {
    results: res
  };
};

export default HomePage;
