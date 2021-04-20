import React from "react";

const Product = (props) => {
  const { produit } = props;
  return (
    <tr>
      <td>{produit.libelle}</td>
      <td>{produit.description}</td>
      <td>{produit.price} €</td>
    </tr>
  );
};

export default Product;
