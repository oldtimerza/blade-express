import InfoSection from "../components/InfoSection";
import InfoCards from "../components/InfoCards";

const HomePage = props => {
  if (props && props.results) {
    const firstResult = props.results[Object.keys(props.results)[0]];
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
  return <p>Loading...</p>;
};

HomePage.getInitialProps = async function({ req }) {
  const FlameLinkStore = await require("../static/js/flamelink-store").default;
  const res = await FlameLinkStore.getInstance().getContent("homePage");
  return {
    results: res
  };
};

export default HomePage;
