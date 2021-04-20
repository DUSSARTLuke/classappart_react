import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
import FormProd from "./FormProd";

const FormOrderCreate = () => {
  let initialValue = [];
  const [products, setProducts] = useState(initialValue);

  const [playOnce, setPlayOnce] = useState(true);
  const [state, setState] = useState({
    selectedProd: {},
    suggestProd: [],
  });

  useEffect(() => {
    if (playOnce) {
      axios
        .get("http://localhost:8000/api/products/")
        .then((res) => {
          const tempArray = [];
          res.data.forEach((element) => {
            const val = `${element.id}` + ", " + `${element.libelle}`;
            tempArray.push({ label: `${element.libelle}`, value: val});
          });
          setState({ suggestProd: tempArray });
          setPlayOnce(false);
        });
    }
  }, [state.suggestProd, playOnce]);
  // console.log(state.suggestProd);

  

  const handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  const randomStr = () => {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = "";
    for (var i = 0; i < string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const prodsOrder = { numOrder: "ORD", product_ids: [], quantite: [] };

    for (let i = 0; i < e.target.index.length; i++) {
      prodsOrder["product_ids"].push(e.target.index[i].value);
      prodsOrder["quantite"].push(e.target.quantite[i].value);
    }
    prodsOrder['numOrder'] += randomStr();
    // console.log(prodsOrder);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(prodsOrder),
    };
    fetch("http://localhost:8000/api/orders/", options).then((response) => {
      console.log(response);
    });
  };
  const addProduct = (e) => {
    e.preventDefault();
    console.log(e.target.selectProd);
    const product = e.target.selectProd.value.split(", ");
    const id = product[0];
    const name = product[1];
    const productOrder = {
      product_id: id,
      product_name: name,
      quantite: e.target.quantite.value
    }
    setProducts([...products, productOrder]);
    console.log(products);
  }

  return (
    <div className="container">
      <h1 className="text-center">
        {" "}
        Enregistrement d'une nouvelle commande :{" "}
      </h1>
      <Form onSubmit={addProduct} style={{ "padding-bottom": "10px" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Libelle du Produit : </Form.Label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable={true}
            isSearchable={true}
            name="selectProd"
            options={state.suggestProd}
            title={state.suggestProd.aria_label}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantité : </Form.Label>
          <Form.Control
            type="number"
            placeholder="Quantité"
            name="quantite"
            defaultValue={0}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ajouter
        </Button>
      </Form>

      <Form onSubmit={handleSubmit}>
          {products.map((product) => {
            return (
              <FormProd product={product} key={product.product_id}/>
              
                // <tr>
                //   <td>{product.product_id}</td>
                //   <td>{product.product_name}</td>
                //   <td>{product.quantite}</td>
                // </tr>
              );
            })}
        <Button variant="primary" type="submit">
          Enregistrer la commande
        </Button>
      </Form>
    </div>
  );
};

export default FormOrderCreate;
