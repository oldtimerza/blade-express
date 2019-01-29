import { shallow, mount } from "enzyme";
import { Button } from "reactstrap";

import HomePage from "../../pages/";
import MediaCard from "../../components/Cards/MediaCard";

describe("index page", () => {
  var wrapper, props;
  beforeEach(async () => {
    const flameLinkService = {
      getContent: () => {
        return [{ infoCardImages: ["someImageSource"] }];
      }
    };
    const moltinService = {
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
      },
      getCollection: () => {
        return {
          data: [{ id: "mostPopId" }]
        };
      }
    };
    const req = {};
    props = await HomePage.getInitialProps({
      req,
      flameLinkService,
      moltinService
    });
    props.flameLinkService = flameLinkService;
    wrapper = shallow(<HomePage {...props} />);
  });

  it("should render an index page", () => {
    expect(wrapper.length).not.toBe(0);
  });

  it("should render with results and popular visas", () => {
    const mountedHomePage = mount(<HomePage {...props} />);
    const mediaCards = mountedHomePage.find(MediaCard);
    const button = mountedHomePage.find(Button);
    console.log({ buttons: button.at(0).debug() });
    expect(mediaCards.length).toBe(1);
    expect(mediaCards.at(0).props().imageUrl).toEqual("imageUrl");
    expect(mediaCards.at(0).props().title).toEqual("product");
    expect(mediaCards.at(0).props().text).toEqual("1234");
    expect(button.length).toEqual(1);
  });
});
