import App, { Container } from "next/app";
import React from "react";

import { withLayout } from "../components/Layout";
import Banner from "../components/Banner";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const FlameLinkStore = await require("../static/js/flamelink-store")
      .default;
    let allProps = {};
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    allProps.pageProps = pageProps;

    let navMenu = {};
    navMenu = await FlameLinkStore.getInstance().getNavigation(
      "mainNavigation"
    );

    allProps.navMenu = navMenu;

    if (router.route && router.route === "/") {
      let bannerUrl = "";
      const bannerResults = await FlameLinkStore.getInstance().getContent(
        "banner"
      );
      bannerUrl =
        bannerResults[Object.keys(bannerResults)[0]].imageDeck[0].imageUrl;
      console.log(bannerUrl);
      allProps.bannerUrl = bannerUrl;
    }

    return { allProps };
  }

  render() {
    const { Component, allProps, router } = this.props;
    let RenderComponent = withLayout(<Component {...allProps.pageProps} />);
    if (router.route && router.route === "/") {
      RenderComponent = withLayout(
        <Component {...allProps.pageProps} />,
        <Banner imageUrl={allProps.bannerUrl} />
      );
    }
    return <RenderComponent menus={allProps.navMenu} />;
  }
}
