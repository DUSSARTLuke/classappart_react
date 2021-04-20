import React, { useState, useEffect } from "react";
import axios from "axios";
import Order from "../components/Commande/Order";
import Navigation from "../components/Navigation";

const Commande = () => {
  const [data, setData] = useState([]);
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios.get("http://localhost:8000/api/orders").then((res) => {
        setData(res.data);
        setPlayOnce(false);
      });
    }
  }, [data, playOnce]);

  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="text-center"> Les Commandes : </h1>
        <table className="table table-bordered table-hover">
          <thead>
            <th>Numéro Commande</th>
            <th>Nombre d'articles</th>
            <th>Prix</th>
            <th>Date commande</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {data.map((order) => (
              <Order order={order} key={order.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Commande;
