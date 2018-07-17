import { shallow } from "enzyme";
import React from "react";

import Banner from "../../components/Banner";

describe("<Banner/>", () => {
  it("should render", () => {
    const imageUrl = "Test.jpg";
    const wrapper = shallow(<Banner imageUrl={imageUrl} />);
    expect(wrapper.length).not.toBe(0);
  });
});
