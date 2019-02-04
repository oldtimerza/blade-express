import axios from "axios";

const MailService = function() {
  var service = {};
  const url = "67.207.73.89/mail";
  const courier = "/courier";

  service.sendMail = async ({
    email,
    name,
    company,
    telephone,
    cellphone,
    collectionAddress,
    deliveryAddress,
    service,
    dimensions,
    weight,
    quantity,
    comments
  }) => {
    try {
      const response = await axios({
        method: "post",
        url: url + courier,
        data: {
          email,
          name,
          message: ""
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  return service;
};

export default MailService;
