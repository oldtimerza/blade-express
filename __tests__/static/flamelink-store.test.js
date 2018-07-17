import firebase from "firebase";
import flamelink from "flamelink";

import FlameLinkStore from "../../static/js/flamelink-store";

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
    return {
      content: {
        get: sinon.stub().returns({
          someId: { someData: "data" },
          someId2: { someData: "data" }
        })
      }
    };
  };
  return mockFlameLink;
});

describe("FlameLinkStore", () => {
  it("should fetch and clean flamelink CMS schema data", async () => {
    const flameLinkStore = FlameLinkStore.getInstance();
    expect(firebase.initializeApp.called).toBeTruthy();
    try {
      const content = await flameLinkStore.getContent("testSchema");
      expect(content).toEqual([
        { id: "someId", someData: "data" },
        { id: "someId2", someData: "data" }
      ]);
    } catch (e) {
      expect(true).toBe(false);
    }
  });
});
