import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

function NavbarComponent({ auth }) {
  const history = useHistory();
  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
    window.location.reload();
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Ecom
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {!auth ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/orderlist">
                  Order History
                </Nav.Link>
              </>
            )}
          </Nav>
          <Nav className="ml-auto">
            {auth && (
              <>
                <Nav.Link as={Link} to="/cart">
                  Cart
                </Nav.Link>
                <Nav.Link onClick={onLogout} as={Button}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
