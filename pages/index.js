import Link from "next/link";

import FlameLinkStore from "../static/js/flamelink-store";
import Layout, { withLayout } from "../components/Layout";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";
import InfoCards from "../components/InfoCards";

const HomePage = props => {
  if (props && props.results) {
    const firstResult = props.results[Object.keys(props.results)[0]];
    console.log(firstResult.infoCardImages);
    const heroImageRef = firstResult.heroImages[0].image[0];
    const infoCardComponent = <InfoCards cards={firstResult.infoCardImages} />;

    const HomePageWithLayout = withLayout(
      <InfoSection
        summary="Our services"
        description="We provide a host of services"
      >
        {infoCardComponent}
      </InfoSection>,
      <Banner imageReference={heroImageRef} />
    );
    return <HomePageWithLayout {...props} />;
  }
  return <p>Loading...</p>;
};

HomePage.getInitialProps = async function() {
  const res = await FlameLinkStore.getInstance().getContent("homePage");
  return {
    results: res
  };
};

export default HomePage;
