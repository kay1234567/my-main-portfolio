import React, { Component } from 'react';

import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container } from 'react-bootstrap/esm';

const Footer = () => {
    return (
      <footer>
        <Container className="my-footer-container">
          <div className="footer-icons">
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
          <div className="inspired-by">
            <h6 className="text-center">
              inspired by{" "}
              <a href="http://azportfolio.herokuapp.com/">AZ Web Dev</a>{" "}
            </h6>
            <h6 className="text-center">
              Built by <a href="/">Olukayode Oluseyi</a> ©2020. All rights
              reserved
            </h6>
          </div>
        </Container>
        
      </footer>
    );
}
 
export default Footer;