import React, { useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";


const ApartmentNew = (props) => {
  const [apartments, setApartments] = useState([]);
  const [form, setState] = useState({
      image: "",
      address:"",
      city:"",
      state:"",
      zip_code:"",
      country:"",
      bedrooms:"",
      bathrooms:"",
      monthly_rent:"",
      manager_id: ""
  });


  const handleChange = (e) => {
    setState({
      //take all the existing form data and,...
      ...form,
      //...add new data to the end as it is typed
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log(success)
    // keeps react from refreshing the page unnessarily
    e.preventDefault();
    // show the current state in the console (should see all cats created)
    console.log(form);
    // set the cats state to include all cats
    // since the current cat state is immutable, we need to create a copy of it and add the new cat to it
    sets((apartments) => [...apartments, form]);
    // // send all cats in the state to the backend to post to the database
    pushApartments(form)
    setSuccess(true)
  };
  const pushApartments = (apartment) => {
    // fetch URL to post new state of `cats` to database
    return fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(res => {
      if(res.ok) {
        window.location.replace('/')
      }
    })
  }

  return (
    <>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label htmlFor="image" id="image">Image URL</Label>
              <Input type="url" name="image" placeholder="Add image url here" onChange={ handleChange } value={ form.image }/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label htmlFor="address" id="address">
              Address
            </Label>
            <Input
              type="text"
              name="address"
              onChange={ handleChange }
              value={form.address}
            />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label htmlFor="city" id="city">
                City
              </Label>
              <Input
                type="text"
                name="city"
                onChange={ handleChange }
                value={form.city}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label htmlFor="state" id="state">
                State
              </Label>
              <Input
                type="text"
                name="state"
                onChange={ handleChange }
                value={form.state}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label htmlFor="zip_code" id="zip_code">
                Zip Code
              </Label>
              <Input
                type="text"
                name="zip_code"
                onChange={ handleChange }
                value={form.zip_code}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
            <Label htmlFor="country" id="country">
              Country
            </Label>
            <Input
              type="text"
              name="country"
              onChange={ handleChange }
              value={form.country}
            />
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label htmlFor="bedrooms" id="bedrooms">
              Bedrooms
            </Label>
            <Input
              type="text"
              name="bedrooms"
              onChange={ handleChange }
              value={form.bedrooms}
            />
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label htmlFor="bedrooms" id="bedrooms">
              Bedrooms
            </Label>
            <Input
              type="text"
              name="bedrooms"
              onChange={ handleChange }
              value={form.bedrooms}
            />
          </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label htmlFor="manager_id" id="manager_id">
              Manager
            </Label>
            <Input
              type="text"
              name="manager_id"
              onChange={ handleChange }
              value={form.manager_id}
            />
          </FormGroup>
          </Col>
        </Row>
        <Button color="info" onClick={ handleSubmit } id="submit">
          Add New Apartments
        </Button>
      </Form>
    </>
  );
};

export default ApartmentNew