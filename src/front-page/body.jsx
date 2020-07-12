import React, { Component } from 'react';
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap'
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
    FaBootstrap,
  FaJoomla,
  FaReact,
} from "react-icons/fa";
const Body = () => {
    return (
      <div className="body">
        <Container>
          <Row>
            <Col className='intro' md={5}>
              <h4>Hello, i am,</h4>
              <h2 className="text-center"> Olukayode Oluseyi</h2>
              <div className="horizontal-line"></div>
              <h1 className="text-center">
                WEB DEVELOPER. <br /> DESIGNER <br /> & THINKER{" "}
              </h1>

              <p className="text-center">
                An energetic, young, hardworking and imaginative web developer
                with ability to work and learn alongside others by contributing
                ideas to create unique and high standard website. I can provide
                intuitive, high end and user centered web designs. Right now, I
                am looking for an entry level position with a company with
                exciting challenges to help boost my experience and really make
                a difference to web projects and the company.
              </p>
              <Button className="myWorksBtn">
                {" "}
                <a href="/my-works">My works </a>{" "}
              </Button>
            </Col>
            <Col md={5}>
              <div className="myskills">
                <h4 className="text-center">SKILLS</h4>
                <div className="skill">
                  <label className="html" htmlFor="">
                    <FaHtml5 /> HTML <br />
                  </label>
                  <ProgressBar striped variant="success" now={90} />
                </div>
                <div className="skill">
                  <label className="css" htmlFor="">
                    <FaCss3 /> CSS
                  </label>
                  <ProgressBar striped variant="info" now={70} />
                </div>
                <div className="skill">
                  <label className="javascript" htmlFor="">
                    <FaJsSquare /> Javascript
                  </label>
                  <ProgressBar striped variant="warning" now={60} />
                </div>
                <div className="skill">
                  <label className="jquery" htmlFor="">
                    <FaJoomla /> JQuery
                  </label>
                  <ProgressBar striped variant="danger" now={60} />
                </div>
                <div className="skill">
                  <label className="bootstrap" htmlFor="">
                    <FaBootstrap /> Bootstrap
                  </label>
                  <ProgressBar striped variant="primary" now={80} />
                </div>
                <div className="skill">
                  <label className="react" htmlFor="">
                    <FaReact /> React
                  </label>
                  <ProgressBar striped variant="secondary" now={60} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default Body;