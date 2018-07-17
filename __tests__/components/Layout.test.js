import { shallow } from "enzyme";
import React from "react";

import { withLayout } from "../../components/Layout/withLayout";

describe("<Layout/>", () => {
  it("should render", () => {
    const Component = withLayout(<div />, <div />);
    const wrapper = shallow(<Component />);
    expect(wrapper.length).not.toBe(0);
  });
});
