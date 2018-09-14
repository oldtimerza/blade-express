import React from "react";
import { shallow } from "enzyme";

import MediaCard from "../../components/Cards/MediaCard";

describe("<MediaCard/>", () => {
  it("should render", () => {
    const wrapper = shallow(<MediaCard />);
    expect(wrapper.length).toBe(1);
  });
});
