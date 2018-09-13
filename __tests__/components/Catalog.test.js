import { shallow } from "enzyme";

import Catalog from "../../components/Catalog";

describe("<Catalog/>", () => {
  it("should render", () => {
    const products = [
      { imageUrl: "iamge", title: "Title", description: "R10" }
    ];
    const wrapper = shallow(<Catalog products={products} />);
    expect(wrapper.length).toBe(1);
  });
});
