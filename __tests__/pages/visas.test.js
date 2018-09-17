import { shallow, mount } from "enzyme";

import Visas from "../../pages/visas";

jest.mock("flamelink", () => {
  const sinon = require("sinon");
  const mockFlameLink = function flamelink(config) {
    var getContentStub = sinon.stub();
    getContentStub.withArgs("visaCategory").returns([{ name: "Category" }]);
    getContentStub
      .withArgs("visaSummary")
      .returns([{ title: "title", description: "description" }]);
    return {
      content: {
        get: getContentStub
      }
    };
  };
  return mockFlameLink;
});

describe("visas page", () => {
  var wrapper;
  beforeEach(async () => {
    const category = "Category";
    const req = {};
    const query = { category };
    const props = await Visas.getInitialProps({ req, query });
    wrapper = shallow(<Visas {...props} />);
  });

  it("should get category and results to display in initial props", async () => {
    const state = wrapper.state();
    expect(state.results).toEqual([
      { description: "description", id: "0", title: "title" }
    ]);
    expect(state.filteredResults).toEqual([
      { description: "description", id: "0", title: "title" }
    ]);
    expect(state.loading).toEqual(false);
    expect(state.filter).toEqual({
      selectedCategory: { id: "0", name: "Category" }
    });
  });

  it("should render", async () => {
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
