import { gateway as MoltinGateway } from "@moltin/sdk";

const MoltinService = function() {
  var service = {};

  const Moltin = MoltinGateway({
    client_id: process.env.MOLTIN_CLIENT_ID
  });

  service.getProducts = () => Moltin.Products.All();

  return service;
};

export default MoltinService;
