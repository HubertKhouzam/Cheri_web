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
          <Navbar.Brand href="/" style={{ color: color, padding: "0", margin: "0", textAlign: 'center', fontFamily: "times-new-roman" }}>
            <div className="text-base md:text-2xl">They don't make them like this anymore</div>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="https://docs.google.com/forms/d/e/1FAIpQLScM7__ojExSwCWYddMCdrNqie3b9DMO6MX6Yt1sJCsZBqE7_A/viewform" target = "_blank">Shop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
