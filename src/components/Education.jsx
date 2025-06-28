import React from 'react';
export const Education = ({ info }) => {
  return (
    <section id="education" >
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-card">
          <div className="education-header">
            <div className="company-role">
              <h3>{info.university}</h3>
              <p><strong>{info.degree}</strong></p>
              <p>GPA: {info.gpa} ({info.honors})</p>
            </div>
            <div className="duration-location">
              <h3>{info.location}</h3>
              <p>{info.period}</p>
            </div>
          </div>
          <ul>
            {info.details.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};
