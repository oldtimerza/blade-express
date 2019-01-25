import { shallow, mount } from "enzyme";

import Visas from "../../pages/visas";

describe("visas page", () => {
  var wrapper;
  beforeEach(async () => {
    jest.resetModules();
    const category = "Category";
    const req = {};
    const query = { category };
    const moltinService = {
      getCategories: () => {
        return {
          data: [
            {
              id: "someID",
              name: "category"
            }
          ]
        };
      },
      getProducts: () => {
        return {
          data: [
            {
              imageurl: "imageUrl",
              name: "product",
              price: [
                {
                  amount: "1234"
                }
              ]
            }
          ]
        };
      }
    };

    const props = await Visas.getInitialProps({ req, query, moltinService });
    props.moltinService = moltinService;
    wrapper = shallow(<Visas {...props} />);
  });

  it("should get category and results to display in initial props", async () => {
    const state = wrapper.state();
    expect(state.results).toEqual([
      { title: "product", imageUrl: "imageUrl", title: "product", cost: "1234" }
    ]);
    expect(state.filteredResults).toEqual([
      { title: "product", imageUrl: "imageUrl", title: "product", cost: "1234" }
    ]);
    expect(state.loading).toEqual(false);
    expect(state.filter).toEqual({
      selectedCategory: { id: "someID", name: "category" }
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
