import React from 'react';
import './Contact.css';
import facebookLogo from '.././logos/facebook.png';
import githubLogo from '.././logos/github.png';
import instagramLogo from './../logos/instagram.png';
import twitterLogo from './../logos/twitter.png';


function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>You can reach me at: <a href="mailto:ashwinsaklecha2004@gmail.com">ashwinsaklecha2004@gmail.com</a></p>
      <div className="logo-container">
        <a href="https://www.facebook.com/yourfacebookprofile"><img src={facebookLogo} alt="Facebook" /></a>
        <a href="https://www.github.com/yourgithubprofile"><img src={githubLogo} alt="GitHub" /></a>
        <a href="https://www.instagram.com/yourinstagramprofile"><img src={instagramLogo} alt="Instagram" /></a>
        <a href="https://www.twitter.com/yourtwitterprofile"><img src={twitterLogo} alt="Twitter" /></a>
      </div>
    </section>
  );
}

export default Contact;
