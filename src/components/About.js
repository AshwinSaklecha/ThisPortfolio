// About.js
import React from 'react';
import './About.css';
import yourImg from './images/your-image.jpg'

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Hello! I am Ashwin Saklecha, a passionate developer with interests in ...</p>
      <img src={yourImg} alt="Ashwin Saklecha" />
    </section>
  );
}

export default About;
