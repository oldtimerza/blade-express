import { gateway as MoltinGateway } from "@moltin/sdk";

const MoltinService = function() {
  var service = {};

  const Moltin = MoltinGateway({
    client_id: "1Wyg3FTGdak6iauQ0peifyjGgmgkO3XPjL3AvImSiD"
  });

  service.getProducts = options => {
    if (options && options.filter && options.filter.category) {
      return Moltin.Products.Filter({
        eq: {
          category: {
            id: options.filter.category.id
          }
        }
      })
        .With(["category"])
        .All();
    }
    return Moltin.Products.All();
  };

  service.getCategories = () => Moltin.Categories.All();

  service.getCart = cartId => Moltin.Cart(cartId).Get();

  service.addToCart = (cartId, productId, quantity) =>
    Moltin.Cart(cartId).AddProduct(productId, quantity);

  return service;
};

export default MoltinService;
