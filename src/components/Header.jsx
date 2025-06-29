import React from 'react';
import portrait from "../assets/portrait.jpg"

export const Header = ({ info }) => {
  return (
    <header className="header-intro">
      <div className="intro-card">
          <img src={portrait} alt="portrait" className="intro-photo"/>
        <div className="intro-text">
          <h1>{info.name}</h1>
          <p className="subtitle">{info.title}</p>
          <p className="description">{info.bio}</p>
          <div className="button-group">
            <a href="#contact" className="contact-icon-link">Get In Touch</a>
            <a href="https://drive.google.com/file/d/1oN_VhZi-eH1QKdRmBWqSFLwpER41Epug/view?usp=sharing" className="contact-icon-link">Download Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
};
