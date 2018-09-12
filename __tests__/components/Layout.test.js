import { shallow } from "enzyme";
import React from "react";

import Layout from "../../components/Layout";

describe("<Layout/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper.length).not.toBe(0);
  });
});
