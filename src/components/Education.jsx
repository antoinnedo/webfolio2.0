import React from 'react';

export const Education = ({ info }) => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-card">
          <h3>{info.university}</h3>
          <p><strong>{info.degree}</strong></p>
          <p className="meta">{info.period} | {info.location} | GPA: {info.gpa} ({info.honors})</p>
          <ul>
            {info.details.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};
