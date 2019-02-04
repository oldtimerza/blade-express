import MoltinService from "./moltin-service";
import FlameLinkService from "./flamelink-service";
import CookieService from "./cookie-service";
import GuidService from "./guid-service";

const services = {
  guidService: new GuidService(),
  cookieService: new CookieService(),
  moltinService: new MoltinService(),
  flameLinkService: new FlameLinkService()
};

export default services;
