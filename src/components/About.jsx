import React from 'react';
import "./about.css";
import aboutImage from "../assets/about.jpeg"

const About = () => {
    return (
        <section className="about-section">
          <h3 id="about" className="about-header">about me</h3>
          <div className="about-content-container">
            <img className="about-img" src={aboutImage} alt="me, not even close to catching a frisbee"/>
            <p className="about-content">
              I'm a second year SYDE student @ <a className="about-link" href="https://uwaterloo.ca/systems-design-engineering/">uWaterloo</a> on my way through 2A <strong>(and seeking spring 2023 jobs!)</strong>.
              <br/><br/>
              I've previously worked at <a className="about-link" href="https://fordpro.com/en-us/">Ford</a> as a SWE intern, and <a className="about-link" href="https://uwaterloo.ca/systems-design-engineering/">OpenText</a> as a mobile developer intern.
              <br/><br/>
              When I'm not (reluctantly) embracing the UW grind, I'm usually watching basketball, learning how to knit or going to the movies. 
            </p>
          </div>
          
        </section>
    );
};

export default About;