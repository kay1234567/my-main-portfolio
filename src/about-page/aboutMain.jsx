import React, { Component } from 'react';
import { Container } from 'react-bootstrap/esm';


const AboutMain = () => {
  
    return (
      <div className="about">
        <Container>
          <div className="aboutMe">
            <h2 className="lead">ABOUT ME</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              dolorem praesentium provident quod quo voluptatem explicabo iusto
              vero magnam excepturi. Obcaecati corrupti explicabo, f uga tempore
              nesciunt nihil accusamus nisi distinctio. Sunt impedit aspernatur
              tempora, aperiam neque quisquam unde molestiae ea blanditiis
              culpa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro, explicabo. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eius, assumenda? Soluta maxime nostrum expedita
              harum quod porro inventore!
            </p>
          </div>
          <div className="myCore">
            <h5>My core includes, but are not limitd to:</h5>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Veniam, qui.
              </li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
          <div className="personalSkills">
            <h5>Personal Skills:</h5>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
          <div className="workExperience">
            <h5>Work Experience:</h5>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
        </Container>
      </div>
    );
}
 
    export default AboutMain;