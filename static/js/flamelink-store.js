import flamelink from "flamelink";
import firebase from "firebase";

var FlameLinkStore = (function() {
  var instance;

  function createInstance() {
    var object = new Object();

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
    object.app = flamelink({ firebaseApp });

    object.getContent = async function(contentName) {
      return this.app.content.get(contentName);
    }.bind(object);

    object.getUrl = async function(mediaReference) {
      return this.app.storage.getURL(mediaReference);
    }.bind(object);

    object.getNavigation = async function(navigationName) {
      return this.app.nav.get(navigationName);
    }.bind(object);

    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

export default FlameLinkStore;
