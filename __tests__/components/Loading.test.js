import { shallow } from "enzyme";
import React from "react";

import Loading from "../../components/Loading";

describe("<Loading/>", () => {
  it("should render", () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper).not.toBe(0);
  });
});
