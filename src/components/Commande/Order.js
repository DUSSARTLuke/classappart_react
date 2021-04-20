import React from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { Button } from "react-bootstrap";

const Order = (props) => {
  let history = useHistory();
  const { order } = props;
  const id = order.id;

  return (
    <tr>
      <td>{order.numOrder}</td>
      <td>{order.quantites}</td>
      <td>{order.price} €</td>
      <td>{order.date_commande}</td>
      <td>
        <Button
          variant="primary"
          onClick={(id) => history.push("/commande/view/" + order.id)}
        >
          Voir details
        </Button>
      </td>
    </tr>
  );
};

export default Order;
