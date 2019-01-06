import App from "next/app";
import React from "react";
import _ from "lodash";

import CartManager from "../components/Cart/CartManager";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import MoltinService from "../services/moltin-service";
import FlameLinkService from "../services/flamelink-service";

async function setupNavBarFromCMS(props, FlameLinkService) {
  let navMenu = {};
  navMenu = await FlameLinkService.getNavigation("mainNavigation");
  props.navMenu = navMenu;
}

function isHome(router) {
  return router.route && router.route === "/";
}

async function setupBannerFromCMS(props, FlameLinkService) {
  let bannerUrl = "";
  const bannerResults = await FlameLinkService.getContent("banner");
  bannerUrl = bannerResults[0].imageDeck[0].imageUrl;
  props.bannerUrl = bannerUrl;
}

async function setupFooterFromCMS(props, FlameLinkService) {
  let footer = {};
  footer = await FlameLinkService.getContent("footer");
  props.footer = footer[0];
}

export default class MyApp extends App {
  //inject services into client side
  static defaultProps = {
    services: {
      moltinService: new MoltinService(),
      flameLinkService: new FlameLinkService()
    }
  };

  static async getInitialProps({ Component, router, ctx }) {
    let startUpProps = {};
    let initialProps = {};

    //inject services into server side context
    const moltinService = new MoltinService();
    const flameLinkService = new FlameLinkService();
    ctx.moltinService = moltinService;
    ctx.flameLinkService = flameLinkService;

    //setup the components initialProps
    if (Component.getInitialProps) {
      initialProps = await Component.getInitialProps(ctx);
    }

    //one time setup of global website common props
    await setupNavBarFromCMS(startUpProps, flameLinkService);
    if (isHome(router)) {
      await setupBannerFromCMS(startUpProps, flameLinkService);
    }
    await setupFooterFromCMS(startUpProps, flameLinkService);

    return { startUpProps, initialProps };
  }

  render() {
    const {
      Component,
      startUpProps,
      initialProps,
      router,
      services
    } = this.props;

    const componentPropsWithServices = { ...initialProps, ...services };
    const FinalComponent = <Component {...componentPropsWithServices} />;
    var withLayout = (
      <Layout menus={startUpProps.navMenu} footer={startUpProps.footer}>
        {FinalComponent}
      </Layout>
    );
    if (isHome(router)) {
      withLayout = (
        <Layout
          menus={startUpProps.navMenu}
          footer={startUpProps.footer}
          banner={<Banner imageUrl={startUpProps.bannerUrl} />}
        >
          {FinalComponent}
        </Layout>
      );
    }
    return (
      <CartManager moltinService={services.moltinService}>
        {withLayout}
      </CartManager>
    );
  }
}
