import React from "react";

import { Form, Button } from "react-bootstrap";

const FormProd = (props) => {
  return (
    <div className="row">
      <div className="col-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Index du produit : </Form.Label>
          <Form.Control
            type="text"
            name="index"
            readonly="true"
            value={props.product.product_id}
          />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
      </div>
      <div className="col-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Libelle du produit : </Form.Label>
          <Form.Control
            type="text"
            name="libelle"
            readonly="true"
            value={props.product.product_name}
          />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
      </div>
      <div className="col-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantité : </Form.Label>
          <Form.Control
            type="text"
            readonly="true"
            name="quantite"
            value={props.product.quantite}
          />
          {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
        </Form.Group>
      </div>
    </div>
  );
};

export default FormProd;
