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
            <a href="#contact" className="button button-secondary">Get In Touch</a>
            <a href="" className="button button-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </header>
  );
};
