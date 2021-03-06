import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Product from "../components/Produit/Product";

const Produit = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios.get("http://localhost:8000/api/products").then((res) => {
        setData(res.data);
        setPlayOnce(false);
      });
    }
  }, [data, playOnce]);
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="text-center"> Les Produits</h1>
        <table className="table table-bordered table-hover">
          <thead>
            <th>Libelle</th>
            <th>Descrption</th>
            <th>Prix</th>
          </thead>
          <tbody>
            {data.map((produit) => (
              <Product produit={produit} key={produit.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Produit;
