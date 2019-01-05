import Cookies from "js-cookie";

const CookieService = function() {
  var service = {};
  service.set = (key, value, options) => {
    Cookies.set(key, value, options);
  };

  service.get = key => {
    return Cookies.get(key);
  };

  service.get = () => {
    return Cookies.get();
  };

  service.delete = key => {
    Cookies.remove(key);
  };

  return service;
};

export default CookieService;
