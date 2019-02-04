import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";

class CourierForm extends Component {
  submit = e => {
    console.log(this.state);
  };

  render() {
    const { deliveryOptions } = this.props;
    return (
      <Form>
        <Input type="text" name="name" id="nameInput" placeholder="Name" />
        <Input
          type="text"
          name="company"
          id="companyInput"
          placeholder="Company"
        />
        <Input
          type="text"
          name="contact"
          id="contactInput"
          placeholder="Contact number"
        />
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="email@myemail.com"
        />
        <FormGroup>
          <Label for="deliveryOptionsInput">Type of delivery</Label>
          <Input type="select" name="deliveryOptions" id="deliveryOptionsInput">
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
          />
          <Input
            type="textarea"
            name="delivery"
            id="deliveryInput"
            placeholder="Delivering To"
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
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="width"
                id="widthInput"
                placeholder="Width"
              />
            </Col>
            <Col>
              <Input
                type="text"
                name="height"
                id="heightInput"
                placeholder="Height"
              />
            </Col>
          </Row>
        </FormGroup>
        <Input
          type="text"
          name="quantity"
          id="quantityInput"
          placeholder="Quantity"
        />
        <Input
          type="text"
          name="weight"
          id="weightInput"
          placeholder="Weight"
        />
        <Input
          type="textarea"
          name="comments"
          id="commentsInput"
          placeholder="Comments"
        />
        <Button onClick={this.submit}>Submit</Button>
      </Form>
    );
  }
}

CourierForm.propTypes = {
  deliveryOptions: PropTypes.array
};

export default CourierForm;
