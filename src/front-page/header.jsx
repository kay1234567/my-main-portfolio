import React, { Component } from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap'
import MyImage from './../mypicture.jpg'
const Header = () => {
    return (
      <Navbar expand="md">
        <Navbar.Brand href="/">
          <Image src={MyImage} roundedCircle />

          <div className="NameAndTitle">
            <h5>
              Olukayode <br />
              Alawiye <br />
              Web Developer
            </h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/my-works">WORKS</Nav.Link>
            <Nav.Link href="/about">ABOUT ME</Nav.Link>
            <Nav.Link href="/contact">CONTACT ME</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default Header;