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

describe("FlameLinkService", () => {
  it("should fetch and clean flamelink CMS schema data", async () => {
    const FlameLinkService = FlameLinkService.getStore();
    expect(firebase.initializeApp.called).toBeTruthy();
    try {
      const content = await FlameLinkService.getContent("testSchema");
      expect(content).toEqual([
        { id: "someId", someData: "data" },
        { id: "someId2", someData: "data" }
      ]);
    } catch (e) {
      throw new Error("something failed the FlameLinkService schema test");
    }
  });
});
