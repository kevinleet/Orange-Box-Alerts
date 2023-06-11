import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      onToggle={handleToggle}
      className="bg-light"
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Hermes Alerter
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" className="navbar-hover">
          <Nav className="align-items-center" onClick={closeMenu}>
            <Nav.Link as={NavLink} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/howitworks"
              className="mx-2 navbar-hover"
            >
              How It Works
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recentrestocks" className="mx-2">
              Recent Restocks
            </Nav.Link>
            <Nav.Link as={NavLink} to="/pricing" className="mx-2">
              Pricing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/subscribe" className="mx-2">
              <Button variant="outline-success" size="sm">
                Subscribe
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
