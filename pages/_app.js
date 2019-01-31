import App from "next/app";
import React from "react";
import _ from "lodash";

import CartManager from "../components/Cart/CartManager";
import Layout from "../components/Layout";
import Banner from "../components/Banner";
import services from "../services";

function isHome(router) {
  return router.route && router.route === "/";
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    //setup the components initialProps
    let initialProps = {};
    if (Component.getInitialProps) {
      initialProps = await Component.getInitialProps({ ...ctx, ...services });
    }

    //one time setup of global website common props
    const footerData = await services.flameLinkService.getContent("footer");
    const navMenu = await services.flameLinkService.getNavigation(
      "mainNavigation"
    );
    const startUpProps = {
      navMenu,
      footer: footerData[0]
    };
    if (isHome(router)) {
      let bannerUrl = "";
      const bannerResults = await services.flameLinkService.getContent(
        "banner"
      );
      bannerUrl = bannerResults[0].banner[0].imageUrl;
      startUpProps.bannerUrl = bannerUrl;
    }

    return { startUpProps, initialProps };
  }

  render() {
    const { Component, startUpProps, initialProps, router } = this.props;

    return (
      <CartManager moltinService={services.moltinService}>
        <Layout
          menus={startUpProps.navMenu}
          footer={startUpProps.footer}
          banner={
            startUpProps.bannerUrl ? (
              <Banner imageUrl={startUpProps.bannerUrl} />
            ) : null
          }
        >
          <Component {...initialProps} {...services} />
        </Layout>
      </CartManager>
    );
  }
}
