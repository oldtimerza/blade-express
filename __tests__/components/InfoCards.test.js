import { shallow } from "enzyme";
import React from "react";

import InfoCards from "../../components/InfoCards";

describe("<InfoCards/>", () => {
  it("should render", () => {
    const cards = [
      {
        imageUrl: "testimage",
        title: "title",
        uniqueKey: "key",
        description: "description"
      }
    ];
    const wrapper = shallow(<InfoCards cards={cards} />);
    expect(wrapper).not.toBe(0);
  });
});
