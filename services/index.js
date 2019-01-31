import MoltinService from "./moltin-service";
import FlameLinkService from "./flamelink-service";

const services = {
  moltinService: new MoltinService(),
  flameLinkService: new FlameLinkService()
};

export default services;
