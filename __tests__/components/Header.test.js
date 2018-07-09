import { shallow } from "enzyme";
import React from "react";

import Header from "../../components/Header";

describe("<Header/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).not.toBe(0);
  });
});
