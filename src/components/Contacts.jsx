import React from 'react';

export const Contacts = ({ links }) => {
  return (
    <section id="contact">
      <h2>Let's Connect</h2>
      <div className="contact-card">
        <p>I'm always interested in new opportunities and collaborations. Let's have a coffee chat!</p>
        <div className="grid grid-3 contact-grid">
          <a className="contact-icon-link" href={links.linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="contact-icon-link" href={links.email}>Email</a>
          <a className="contact-icon-link" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
};
