export default props => {
  return (
    <div>
      <p>Address details</p>
      <div>{props.addressLine1}</div>
      <div>{props.addressLine2}</div>
      <div>{props.city}</div>
      <div>{props.province}</div>
      <div>{props.postalCode}</div>
    </div>
  );
};
