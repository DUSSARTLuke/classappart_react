import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./pages/Home";
import Produit from "./pages/Produit";
import ProduitDetails from "./pages/ProduitDetails";
import ProduitCreate from "./pages/ProduitCreate";
import Commande from "./pages/Commande";
import CommandeCreate from "./pages/CommandeCreate";
import CommandeDetails from "./pages/CommandeDetails";


const App = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produits/view" component={Produit} />
      <Route exact path="/produits/create" component={ProduitCreate} />
      <Route exact path="/produit/view/:id" component={ProduitDetails} />
      <Route exact path="/commandes/view" component={Commande} />
      <Route exact path="/commandes/create" component={CommandeCreate} />
      <Route exact path="/commande/view/:id" component={CommandeDetails} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
