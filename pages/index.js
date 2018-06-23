import Link from "next/link";

import FlameLinkStore from "../static/js/flamelink-store";
import Layout, { withLayout } from "../components/Layout";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";

const HomePage = props => {
  if (props && props.results) {
    const firstResult = props.results[Object.keys(props.results)[0]];
    const heroImageRef = firstResult.heroImages[0].image[0];
    const HomePageWithLayout = withLayout(
      <InfoSection
        summary="Our services"
        description="We provide a host of services"
      />,
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
