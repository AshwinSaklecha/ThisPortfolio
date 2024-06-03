import React from 'react';
import './Home.css';
import homeImg from './images/home-image.png'
import Typing from './Typing';


function Home() {
  return (
    <section id="home" className="home">
      <div className="home-text">
        <h2>Welcome to My Portfolio</h2>
        <p id="typing-text">
          <Typing text={[
            'I am Ashwin Saklecha',
            'I am a Full Stack Developer'
          ]} /> 
        </p>
      </div>
      
      <div className="home-image">
        <img src={homeImg} alt="Astronaut" />
      </div>
    </section>
  );
}

export default Home;
