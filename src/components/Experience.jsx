import React from 'react';

export const Experience = ({ jobs }) => {
  return (
    <section id="experience" className="experience-list">
      <h2>Professional Experience</h2>
      {jobs.map((job, index) => (
        <div className="experience-card" key={index}>
          <div className="experience-header">
            <div className="company-role">
              <h3>{job.company}</h3>
              <p><strong>{job.role}</strong></p>
            </div>
            <div className="duration-location">
              <h3>{job.location}</h3>
              <p>{job.period}</p>
            </div>
          </div>
          <ul className="experience-description">
            {job.details.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

