import React from 'react';

export const Projects = ({ projects }) => {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(proj => (
          <div key={proj.title} className="project-card">
            <div className="project-image-container">
              <img src={proj.image} alt={`Screenshot of ${proj.title}`} className="project-image" />
              
              <div className="project-details">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="project-tech-list">
                  {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
