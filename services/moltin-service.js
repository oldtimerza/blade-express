import { gateway as MoltinGateway } from "@moltin/sdk";

const MoltinService = function() {
  var service = {};

  const Moltin = MoltinGateway({
    client_id: "1Wyg3FTGdak6iauQ0peifyjGgmgkO3XPjL3AvImSiD"
  });

  service.getProducts = ({ filter }) => {
    if (filter && filter.category) {
      return Moltin.Products.Filter({
        eq: {
          category: {
            id: filter.category.id
          }
        }
      })
        .With(["category"])
        .All();
    }
    return Moltin.Products.All();
  };
  service.getCategories = () => Moltin.Categories.All();

  return service;
};

export default MoltinService;
