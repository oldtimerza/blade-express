import Link from "next/link";

import Layout, { withLayout } from "../components/Layout";
import Banner from "../components/Banner";
import InfoSection from "../components/InfoSection";

export default withLayout(
  <InfoSection
    summary="Our services"
    description="We provide a host of services"
  />,
  <Banner />
);
