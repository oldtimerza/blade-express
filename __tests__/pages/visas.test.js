import { shallow } from "enzyme";

import Visas from "../pages/visas";

describe("visas page", () => {
  it("should render", () => {
    const wrapper = shallow(<Visas />);
    expect(wrapper.length).toBe(1);
  });
});
