import { gateway as MoltinGateway } from "@moltin/sdk";

import MoltinService from "../../services/moltin-service";

const mockProducts = [{ title: "mockProducts" }];

jest.mock("@moltin/sdk", () => {
  const sinon = require("sinon");
  const gateway = function() {
    return {
      Products: {
        All: function() {
          return mockProducts;
        }
      }
    };
  };
  return { gateway };
});

describe("moltin service", () => {
  it("should fetch all products from Moltin when getProducts is called", () => {
    var service = new MoltinService();
    expect(service.getProducts()).toBe(mockProducts);
  });
});
