import { shallow } from "enzyme";
import React from "react";

import Section from "../../components/Section";

describe("<Section/>", () => {
  it("should render", () => {
    const component = (
      <Section summary="summary" description="desccr">
        <div />
      </Section>
    );
    const wrapper = shallow(component);
    expect(wrapper.length).not.toBe(0);
  });
});
