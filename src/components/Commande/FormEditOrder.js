import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";

const FormEditOrder = (props) => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get("http://localhost:8000/api/orders/" + props.match.params.id)
        .then((res) => {
          setData(res.data);
          setPlayOnce(false);
        });
    }
  }, [data, playOnce]);
  console.log(data);

  const state = {
    libelle: "",
    description: "",
    price: "",
  };

  const handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/orders", this.state)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center">
        {" "}
        Enregistrement d'une nouvelle commande :{" "}
      </h1>
      <form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Libelle du Produit : </Form.Label>
          {/* <Select
            closeMenuOnSelect={false}
            defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            options={colourOptions}
          /> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description du produit : </Form.Label>
          <Form.Control
            type="text"
            placeholder="Descrption"
            name="description"
            value={this.state.description}
            onChange={this.handleInput}
          />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Prix du produit : </Form.Label>
          <Form.Control
            type="number"
            placeholder="price"
            name="price"
            value={this.state.price}
            onChange={this.handleInput}
          />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Enregistrer
        </Button>
      </form>
    </div>
  );
};

export default FormEditOrder;
