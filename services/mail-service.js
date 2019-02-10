import axios from "axios";
import mustache from "mustache";

import template from "../templates/courier-email-request.txt";

const MailService = function() {
  var service = {};
  const url = "http://www.blade-express.co.za/api";
  const courier = "/courier";

  service.sendMail = (email, name, data) => {
    try {
      const message = mustache.render(template, data);
      console.log({ message, template });
      return axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        },
        method: "post",
        url: url + courier,
        data: {
          email,
          name,
          message
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return service;
};

export default MailService;
