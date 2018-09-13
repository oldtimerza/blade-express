import { shallow } from "enzyme";

import HomePage from "../../pages/";

describe("index page", () => {
  it("should render an index page", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).not.toBe(0);
  });
  it("should render with results", () => {
    const results = [{ infoCardImages: ["someImageSource"] }];
    const wrapper = shallow(<HomePage results={results} />);
    expect(wrapper.length).not.toBe(0);
  });
});
