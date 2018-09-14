import React from "react";
import { shallow } from "enzyme";

import Filter from "../../components/Filter";

describe("<Filter/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.length).toBe(1);
  });
});
