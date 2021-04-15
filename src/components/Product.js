import React from "react";

const Product = (props) => {
  const { produit } = props;
  return (
    <div>
      <span>
        <h2 className="text-danger">
          {produit.libelle} | {produit.price} € | {produit.description}{" "}
        </h2>
      </span>
    </div>
  );
};

export default Product;
