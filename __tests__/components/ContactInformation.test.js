import React from "react";
import { shallow } from "enzyme";

import ContactInformation from "../../components/Footer/ContactInformation";

describe("<ContactInformation/>", () => {
  it("should render", () => {
    const wrapper = shallow(<ContactInformation />);
    expect(wrapper.length).toBe(1);
  });
});
