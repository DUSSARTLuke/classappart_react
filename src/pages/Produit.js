import React from "react";
import Navigation from "../components/Navigation";

const Produit = () => {
  const state = {
    post: "",
  };

  const produitRecup = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ post: result });
      });
  };
  return (
    <div>
      <Navigation />
      <h1 className="text-center">Les produits</h1>
      {this.state.libelle}
    </div>
  );
};

export default Produit;
