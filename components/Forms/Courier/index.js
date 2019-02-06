import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

import { isEmpty, isMeasurement, isNumeric, isWeight } from "../Validation";

class CourierForm extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  submit = e => {
    const valid =
      !isEmpty(this.state.name) &&
      !isEmpty(this.state.company) &&
      !isEmpty(this.state.contactNo) &&
      isNumeric(this.state.contactNo) &&
      !isEmpty(this.state.collectionAddress) &&
      !isEmpty(this.state.deliveryAddress) &&
      !isEmpty(this.state.length) &&
      isMeasurement(this.state.length) &&
      !isEmpty(this.state.width) &&
      isMeasurement(this.state.width) &&
      !isEmpty(this.state.height) &&
      isMeasurement(this.state.height) &&
      !isEmpty(this.state.quantity) &&
      isNumeric(this.state.quantity) &&
      !isEmpty(this.state.weight) &&
      isWeight(this.state.weight);
    if (valid) {
      console.log(this.state);
    } else {
      console.log("invalid");
    }
  };

  render() {
    const { deliveryOptions } = this.props;
    return (
      <Form>
        <Input
          type="text"
          name="name"
          id="nameInput"
          placeholder="Name"
          onChange={e => this.setState({ name: e.target.value })}
          valid={!isEmpty(this.state.name)}
          invalid={isEmpty(this.state.name)}
        />
        <Input
          type="text"
          name="company"
          id="companyInput"
          placeholder="Company"
          onChange={e => this.setState({ company: e.target.value })}
          valid={!isEmpty(this.state.company)}
          invalid={isEmpty(this.state.company)}
        />
        <Input
          type="text"
          name="contact"
          id="contactInput"
          placeholder="Contact number"
          onChange={e => this.setState({ contactNo: e.target.value })}
          valid={
            !isEmpty(this.state.contactNo) && isNumeric(this.state.contactNo)
          }
          invalid={
            isEmpty(this.state.contactNo) || !isNumeric(this.state.contactNo)
          }
        />
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="email@myemail.com"
          onChange={e => this.setState({ email: e.target.value })}
        />
        <FormGroup>
          <Label for="deliveryOptionsInput">Type of delivery</Label>
          <Input
            type="select"
            name="deliveryOptions"
            id="deliveryOptionsInput"
            onChange={e => this.setState({ deliveryOption: e.target.value })}
          >
            {deliveryOptions.map(option => (
              <option>{option.display}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup id="addresses">
          <Label for="addresses">Addresses</Label>
          <Input
            type="textarea"
            name="collection"
            id="collectionInput"
            placeholder="Collection From"
            onChange={e => this.setState({ collectionAddress: e.target.value })}
            valid={!isEmpty(this.state.collectionAddress)}
            invalid={isEmpty(this.state.collectionAddress)}
          />
          <Input
            type="textarea"
            name="delivery"
            id="deliveryInput"
            placeholder="Delivering To"
            onChange={e => this.setState({ deliveryAddress: e.target.value })}
            valid={!isEmpty(this.state.deliveryAddress)}
            invalid={isEmpty(this.state.deliveryAddress)}
          />
        </FormGroup>
        <FormGroup id="dimensions">
          <Label for="dimensions">Dimensions</Label>
          <Row form>
            <Col>
              <Input
                type="text"
                name="length"
                id="lengthInput"
                placeholder="Length"
                onChange={e => this.setState({ length: e.target.value })}
                valid={
                  !isEmpty(this.state.length) &&
                  isMeasurement(this.state.length)
                }
                invalid={
                  isEmpty(this.state.length) ||
                  !isMeasurement(this.state.length)
                }
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="width"
                id="widthInput"
                placeholder="Width"
                onChange={e => this.setState({ width: e.target.value })}
                valid={
                  !isEmpty(this.state.width) && isMeasurement(this.state.width)
                }
                invalid={
                  isEmpty(this.state.width) || !isMeasurement(this.state.width)
                }
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="height"
                id="heightInput"
                placeholder="Height"
                onChange={e => this.setState({ height: e.target.value })}
                valid={
                  !isEmpty(this.state.height) &&
                  isMeasurement(this.state.height)
                }
                invalid={
                  isEmpty(this.state.height) ||
                  !isMeasurement(this.state.height)
                }
              />
            </Col>
          </Row>
        </FormGroup>
        <Input
          type="text"
          name="quantity"
          id="quantityInput"
          placeholder="Quantity"
          onChange={e => this.setState({ quantity: e.target.value })}
          valid={
            !isEmpty(this.state.quantity) && isNumeric(this.state.quantity)
          }
          invalid={
            isEmpty(this.state.quantity) || !isNumeric(this.state.quantity)
          }
        />
        <Input
          type="text"
          name="weight"
          id="weightInput"
          placeholder="Weight"
          onChange={e => this.setState({ weight: e.target.value })}
          valid={!isEmpty(this.state.weight) && isWeight(this.state.weight)}
          invalid={isEmpty(this.state.weight) || !isWeight(this.state.weight)}
        />
        <Input
          type="textarea"
          name="comments"
          id="commentsInput"
          placeholder="Comments"
          onChange={e => this.setState({ comments: e.target.value })}
        />
        <Button onClick={this.submit}>Submit</Button>
      </Form>
    );
  }
}

CourierForm.propTypes = {
  deliveryOptions: PropTypes.array,
  mailService: PropTypes.object
};

export default CourierForm;
