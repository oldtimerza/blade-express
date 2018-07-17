import { shallow } from "enzyme";
import HomePage from "../../pages/";

describe("index page", () => {
  it("should render an index page", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).not.toBe(0);
  });
});
