import PropTypes from "prop-types";

import css from "./styling.scss";

const ContactInformation = props => {
  return (
    <div>
      <p>Contact information</p>
      <div className={css.descriptive_text}>Telephone: {props.telephone}</div>
      <div className={css.descriptive_text}>Fax: {props.fax}</div>
      <div className={css.descriptive_text}>Email: {props.email}</div>
    </div>
  );
};

ContactInformation.propTypes = {
  telephone: PropTypes.string,
  fax: PropTypes.string,
  email: PropTypes.string
};

export default ContactInformation;
