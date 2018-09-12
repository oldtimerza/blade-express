import React from "react";

import InfoSection from "../components/InfoSection";
import InfoCards from "../components/InfoCards";
import Loading from "../components/Loading";

const HomePage = props => {
  if (props && props.results) {
    const firstResult = props.results[0];
    const infoCardComponent = <InfoCards cards={firstResult.infoCardImages} />;

    return (
      <InfoSection
        summary="Our services"
        description="We provide a host of services"
      >
        {infoCardComponent}
      </InfoSection>
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
