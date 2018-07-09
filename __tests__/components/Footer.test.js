import { shallow } from "enzyme";
import React from "react";

import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).not.toBe(0);
  });
});
