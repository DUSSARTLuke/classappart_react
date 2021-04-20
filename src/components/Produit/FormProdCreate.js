import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class FormProdCreate extends Component {
  state = {
    libelle: "",
    description: "",
    price: "",
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", this.state)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center"> Enregistrement d'un nouveau produit : </h1>
        <form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Libelle du Produit : </Form.Label>
            <Form.Control
              type="text"
              placeholder="Libelle"
              name="libelle"
              value={this.state.libelle}
              onChange={this.handleInput}
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
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
  }
}

export default FormProdCreate;
