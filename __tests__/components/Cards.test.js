import { shallow } from "enzyme";
import React from "react";

import Cards from "../../components/Cards";

describe("<Cards/>", () => {
  it("should render", () => {
    const cards = [
      {
        imageUrl: "testimage",
        title: "title",
        uniqueKey: "key",
        description: "description"
      }
    ];
    const wrapper = shallow(<Cards cards={cards} />);
    expect(wrapper.length).not.toBe(0);
  });
});
