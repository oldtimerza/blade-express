import flamelink from "flamelink";
import firebase from "firebase";

const FlameLinkService = function() {
  var service = {};

  const config = {
    apiKey: "AIzaSyCF-1BA9qhl4SR4U8Iut-yUCy3yioFQ5MA",
    authDomain: "blade-express.firebaseapp.com",
    databaseURL: "https://blade-express.firebaseio.com",
    projectId: "blade-express",
    storageBucket: "blade-express.appspot.com"
  };

  const firebaseApp = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(config);

  service.app = flamelink({ firebaseApp });

  service.getContent = async function(contentName, options) {
    let content = {};
    if (options) {
      content = await this.app.content.get(contentName, options);
    } else {
      content = await this.app.content.get(contentName);
    }

    let results = [];
    if (content) {
      Object.keys(content).map(key =>
        results.push({ ...content[key], id: key })
      );
    }
    return results;
  };

  service.getUrl = async function(mediaReference) {
    return this.app.storage.getURL(mediaReference);
  };

  service.getNavigation = async function(navigationName) {
    return this.app.nav.get(navigationName);
  };

  return service;
};

export default FlameLinkService;
