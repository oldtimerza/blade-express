export default props => {
  return (
    <div>
      <p>Contact information</p>
      <div>Telephone: {props.telephone}</div>
      <div>Fax: {props.fax}</div>
      <div>Email: {props.email}</div>
    </div>
  );
};
