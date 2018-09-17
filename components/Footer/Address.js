import PropTypes from "prop-types";

import css from "./styling.scss";

const Address = props => {
  return (
    <div>
      <p>Address details</p>
      <div className={css.descriptive_text}>{props.addressLine1}</div>
      <div className={css.descriptive_text}>{props.addressLine2}</div>
      <div className={css.descriptive_text}>{props.city}</div>
      <div className={css.descriptive_text}>{props.province}</div>
      <div className={css.descriptive_text}>{props.postalCode}</div>
    </div>
  );
};

Address.propTypes = {
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  city: PropTypes.string,
  province: PropTypes.string,
  postalCode: PropTypes.string
};

export default Address;
