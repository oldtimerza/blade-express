import React from "react";
import { shallow } from "enzyme";

import Address from "../../components/Footer/Address";

describe("<Address/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Address />);
    expect(wrapper.length).toBe(1);
  });
});
