import firebase from "firebase";

import FlameLinkService from "../../services/flamelink-service";

jest.mock("firebase", () => {
  const sinon = require("sinon");
  return {
    app: sinon.spy(),
    apps: [],
    initializeApp: sinon.spy()
  };
});

jest.mock("flamelink", () => {
  const sinon = require("sinon");
  const mockFlameLink = function flamelink(config) {
    const mockGet = sinon.stub();
    const allContent = mockGet.withArgs("all").returns({
      someId: { someData: "data" },
      someId2: { someData: "data" }
    });
    const noContent = mockGet.withArgs("none").returns(null);
    return {
      content: {
        get: mockGet
      }
    };
  };
  return mockFlameLink;
});

describe("FlameLinkService", () => {
  it("should fetch and clean flamelink CMS schema data", async () => {
    const store = FlameLinkService.getStore();
    expect(firebase.initializeApp.called).toBeTruthy();
    try {
      const content = await store.getContent("all");
      expect(content).toEqual([
        { id: "someId", someData: "data" },
        { id: "someId2", someData: "data" }
      ]);
    } catch (e) {
      console.dir({ e });
      throw new Error(
        "Failed the flame link service test please check the console"
      );
    }
  });
  it("should return null when there is no data from the firebase store", async () => {
    jest.mock("flamelink", () => {
      const sinon = require("sinon");
      const mockFlameLink = function flamelink(config) {
        return {
          content: {
            get: sinon.stub().returns(null)
          }
        };
      };
      return mockFlameLink;
    });
    const store = FlameLinkService.getStore();
    expect(firebase.initializeApp.called).toBeTruthy();
    try {
      const content = await store.getContent("none");
      expect(content).toEqual([]);
    } catch (e) {
      console.dir({ e });
      throw new Error(
        "Failed the flame link service test please check the console"
      );
    }
  });
});
