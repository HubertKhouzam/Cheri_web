import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MenuCheri from './Menu';

function Navigation({ color }) {
  return (
    <>
      <Navbar>
        <Container className="font-serif font-georgia">
          <MenuCheri />
          <Navbar.Brand
            href="/"
            style={{
              color: color,
              fontSize: '50px',
              padding: "0",
              margin: "0"
            }}
          >
            Chéri
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="https://forms.gle/d3T6kzqxsTZBoELS9" target = "_blank">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
