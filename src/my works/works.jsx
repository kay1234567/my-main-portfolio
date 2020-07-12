import React, { Component, useState, useEffect } from 'react';
import Aplus from './images/aplus.png'
import Aplus2 from './images/aplus2.png'
import memeGenerator from './images/meme-generator.png'
import recipeApp from './images/recipeapp.png'
import relaxationapp from './images/relaxation-app.png'
import todoapp from './images/todoapp.png'
import { Container, Row, Col, Image, Button } from "react-bootstrap";



const MyWorks = () => {
    const [myworks, setmyWorks] = useState([
      {
        image: <Image src={memeGenerator} />,
        name: "Meme-Generator",
        id: 1,
      },
      
      {
        image: <Image src={recipeApp} />,
        name: "Recipe App",
        id: 2,
      },
      {
        image: <Image src={Aplus} />,
        name: "Aplus Construction Services",
        id: 3,
      },
      {
        image: <Image src={todoapp} />,
        name: "TodoApp",
        id: 4,
      },
      {
        image: <Image src={relaxationapp} />,
        name: "Relaxation App",
        id: 5,
      },
      {
        image: <Image src={Aplus2} />,
        name: "Aplus Construction",
        id: 6,
      },
    ]);
    

    return (
      <div className="myworks">
        <Container>
          <Row>
            {myworks.map((mywork) => {
              return (
                <Col sm={12} key={mywork.id}>
                  <h3> {mywork.name} </h3> {mywork.image}{" "}
                  < Button variant="danger">visit page</Button>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
}
 
export default MyWorks;