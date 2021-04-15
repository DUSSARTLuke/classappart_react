import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

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
   
  }, [data]);
  return (
    <div>
      <Navigation />
      <h1 className="text-center"> Les Produits</h1>
      <ul>
        {data.map((produit) => (
          <Product produit={produit} key={produit.id}/>
        ))}
      </ul>
    </div>
  );
};

export default Produit;
