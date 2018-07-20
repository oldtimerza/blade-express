import { shallow } from "enzyme";
import React from "react";

import Footer from "../../components/Footer";

describe("<Footer/>", () => {
  it("should render", () => {
    const details = {
      addressLine1: "test",
      addressLine2: "test",
      city: "test",
      province: "test",
      postalCode: "test",
      telephone: "test",
      fax: "test",
      email: "test"
    };
    const wrapper = shallow(<Footer details={details} />);
    expect(wrapper.length).not.toBe(0);
  });
});
