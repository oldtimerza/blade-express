import { shallow } from "enzyme";
import ProductCatalog from "../../components/ProductCatalog";

describe("<ProductCatalog />", () => {
  it("should render", () => {
    const products = [
      { imageUrl: "iamge", title: "Title", description: "R10" }
    ];
    const wrapper = shallow(<ProductCatalog products={products} />);
    expect(wrapper.length).toBe(1);
  });
});
