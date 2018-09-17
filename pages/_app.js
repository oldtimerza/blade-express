import App from "next/app";
import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

async function setupNavBarFromCMS(props, FlameLinkStore) {
  let navMenu = {};
  navMenu = await FlameLinkStore.getStore().getNavigation("mainNavigation");
  props.navMenu = navMenu;
}

function isHome(router) {
  return router.route && router.route === "/";
}

async function setupBannerFromCMS(props, FlameLinkStore) {
  let bannerUrl = "";
  const bannerResults = await FlameLinkStore.getStore().getContent("banner");
  bannerUrl = bannerResults[0].imageDeck[0].imageUrl;
  props.bannerUrl = bannerUrl;
}

async function setupFooterFromCMS(props, FlameLinkStore) {
  let footer = {};
  footer = await FlameLinkStore.getStore().getContent("footer");
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

    await setupNavBarFromCMS(allProps, FlameLinkStore);
    if (isHome(router)) {
      await setupBannerFromCMS(allProps, FlameLinkStore);
    }
    await setupFooterFromCMS(allProps, FlameLinkStore);
    return { allProps };
  }

  render() {
    const { Component, allProps, router } = this.props;
    if (isHome(router)) {
      return (
        <Layout
          menus={allProps.navMenu}
          footer={allProps.footer}
          banner={<Banner imageUrl={allProps.bannerUrl} />}
        >
          <Component {...allProps.pageProps} />
        </Layout>
      );
    }
    return (
      <Layout menus={allProps.navMenu} footer={allProps.footer}>
        <Component {...allProps.pageProps} />
      </Layout>
    );
  }
}
