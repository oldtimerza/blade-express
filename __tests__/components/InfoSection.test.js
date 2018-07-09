import { shallow } from "enzyme";
import React from "react";

import InfoSection from "../../components/InfoSection";

describe("<InfoSection/>", () => {
  it("should render", () => {
    const component = (
      <InfoSection summary="summary" description="desccr">
        <div />
      </InfoSection>
    );
    const wrapper = shallow(component);
    expect(wrapper).not.toBe(0);
  });
});
