import App from "next/app";
import React from "react";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
import CartManager from "../components/Cart/cart-manager";

async function setupNavBarFromCMS(props, FlameLinkService) {
  let navMenu = {};
  navMenu = await FlameLinkService.getStore().getNavigation("mainNavigation");
  props.navMenu = navMenu;
}

function isHome(router) {
  return router.route && router.route === "/";
}

async function setupBannerFromCMS(props, FlameLinkService) {
  let bannerUrl = "";
  const bannerResults = await FlameLinkService.getStore().getContent("banner");
  bannerUrl = bannerResults[0].imageDeck[0].imageUrl;
  props.bannerUrl = bannerUrl;
}

async function setupFooterFromCMS(props, FlameLinkService) {
  let footer = {};
  footer = await FlameLinkService.getStore().getContent("footer");
  props.footer = footer[0];
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const FlameLinkService = await require("../services/flamelink-service")
      .default;
    const MoltinService = await require("../services/moltin-service").default;
    const moltinService = new MoltinService();

    let allProps = {};
    let pageProps = {};

    //add services to client props
    pageProps.moltinService = moltinService;
    pageProps.flameLinkService = FlameLinkService;

    //add services to server context
    ctx.moltinService = moltinService;
    ctx.flameLinkService = FlameLinkService;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    allProps.pageProps = pageProps;

    await setupNavBarFromCMS(allProps, FlameLinkService);
    if (isHome(router)) {
      await setupBannerFromCMS(allProps, FlameLinkService);
    }
    await setupFooterFromCMS(allProps, FlameLinkService);
    return { allProps };
  }

  render() {
    const { Component, allProps, router } = this.props;
    if (isHome(router)) {
      return (
        <CartManager>
          <Layout
            menus={allProps.navMenu}
            footer={allProps.footer}
            banner={<Banner imageUrl={allProps.bannerUrl} />}
          >
            <Component {...allProps.pageProps} />
          </Layout>
        </CartManager>
      );
    }
    return (
      <Layout menus={allProps.navMenu} footer={allProps.footer}>
        <Component {...allProps.pageProps} />
      </Layout>
    );
  }
}
