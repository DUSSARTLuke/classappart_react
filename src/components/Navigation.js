import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">DUSSART Corp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <NavDropdown title="Produits" id="basic-nav-dropdown">
            <NavDropdown.Item href="/produits/create">
              Enregistrer un produit
            </NavDropdown.Item>
            <NavDropdown.Item href="/produits/view">
              Voir les produits
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Commandes" id="basic-nav-dropdown">
            <NavDropdown.Item href="/commandes/create">
              Enregistrer une commande
            </NavDropdown.Item>
            <NavDropdown.Item href="/commandes/view">
              Voir les commandes
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
