import App from "next/app";
import React from "react";

import { withLayout } from "../components/Layout";
import Banner from "../components/Banner";

async function setUpNavMenuFromCMS(props, FlameLinkStore) {
  let navMenu = {};
  navMenu = await FlameLinkStore.getInstance().getNavigation("mainNavigation");
  props.navMenu = navMenu;
}

function isHome(router) {
  return router.route && router.route === "/";
}

async function createBannerFromCMS(props, FlameLinkStore) {
  let bannerUrl = "";
  const bannerResults = await FlameLinkStore.getInstance().getContent("banner");
  bannerUrl = bannerResults[0].imageDeck[0].imageUrl;
  props.bannerUrl = bannerUrl;
}

async function setupFooterFromCMS(props, FlameLinkStore) {
  let footer = {};
  footer = await FlameLinkStore.getInstance().getContent("footer");
  props.footer = footer[0];
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const FlameLinkStore = await require("../static/js/flamelink-store")
      .default;

    let allProps = {};
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    allProps.pageProps = pageProps;

    await setUpNavMenuFromCMS(allProps, FlameLinkStore);
    if (isHome(router)) {
      await createBannerFromCMS(allProps, FlameLinkStore);
    }
    await setupFooterFromCMS(allProps, FlameLinkStore);
    return { allProps };
  }

  render() {
    const { Component, allProps, router } = this.props;
    let RenderComponent = withLayout(<Component {...allProps.pageProps} />);
    if (isHome(router)) {
      RenderComponent = withLayout(
        <Component {...allProps.pageProps} />,
        <Banner imageUrl={allProps.bannerUrl} />
      );
    }
    return (
      <RenderComponent menus={allProps.navMenu} footer={allProps.footer} />
    );
  }
}
