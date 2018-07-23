import css from "./styling.scss";

export default props => {
  return (
    <div>
      <p>Contact information</p>
      <div className={css.descriptive_text}>Telephone: {props.telephone}</div>
      <div className={css.descriptive_text}>Fax: {props.fax}</div>
      <div className={css.descriptive_text}>Email: {props.email}</div>
    </div>
  );
};
