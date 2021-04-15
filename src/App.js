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


const App = () => {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produits" component={Produit} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
