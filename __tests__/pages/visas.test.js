import { shallow, mount } from "enzyme";
import sinon from "sinon";

import Visas from "../../pages/visas";

describe("visas page", () => {
  it("should render", () => {
    const wrapper = shallow(<Visas />);
    expect(wrapper.length).toBe(1);
  });

  it("should filter it's results by search string", () => {
    const results = [{ title: "test" }, { title: "fake" }];
    const filter = { selectedCategory: { name: "anything" } };
    const wrapper = mount(<Visas results={results} filter={filter} />);
    wrapper.instance().changeSearch("te");
    const expected = [{ title: "test" }];
    expect(wrapper.state().filteredResults).toEqual(expected);
  });
});
