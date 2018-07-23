import css from "./styling.scss";

export default props => {
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
