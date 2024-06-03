import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <h1>Ashwin Saklecha</h1>
      <ul>
        <li><a href="#home" onClick={(e) => {e.preventDefault(); document.getElementById('home').scrollIntoView({behavior: 'smooth'});}}>Home</a></li>
        <li><a href="#about" onClick={(e) => {e.preventDefault(); document.getElementById('about').scrollIntoView({behavior: 'smooth'});}}>About</a></li>
        <li><a href="#projects" onClick={(e) => {e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior: 'smooth'});}}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => {e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior: 'smooth'});}}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
