import { shallow } from "enzyme";

import About from "../../pages/about";

describe("index page", () => {
  it("should render an index page", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.length).not.toBe(0);
  });
});
