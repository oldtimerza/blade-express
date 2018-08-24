import { shallow, mount } from "enzyme";
import React from "react";

import NavMenu from "../../components/Footer/NavMenu";

describe("<NavMenu/>", () => {
  const menu = { items: [{ title: "Link1" }, { title: "Link2" }] };
  it("should render", () => {
    const wrapper = shallow(<NavMenu menus={menu} />);
    expect(wrapper.length).not.toBe(0);
  });
  it("should render the correct number of links", () => {
    const wrapper = mount(<NavMenu menus={menu} />);
    const menuItems = wrapper.find(".menuItem");
    expect(menuItems.length).toBe(2);
  });
});
