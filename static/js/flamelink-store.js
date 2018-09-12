import flamelink from "flamelink";
import firebase from "firebase";

var FlameLinkStore = (function() {
  var instance;

  function createInstance() {
    var store = new Object();

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
    store.app = flamelink({ firebaseApp });

    store.getContent = async function(contentName) {
      const content = await this.app.content.get(contentName);
      let results = [];
      Object.keys(content).map(key =>
        results.push({ ...content[key], id: key })
      );
      return results;
    }.bind(store);

    store.getUrl = async function(mediaReference) {
      return this.app.storage.getURL(mediaReference);
    }.bind(store);

    store.getNavigation = async function(navigationName) {
      return this.app.nav.get(navigationName);
    }.bind(store);

    return store;
  }

  return {
    getStore: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default FlameLinkStore;
