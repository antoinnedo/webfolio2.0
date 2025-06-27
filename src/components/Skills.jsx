import React from 'react';

export const Skills = ({ skills }) => {
  return (
    <section id="skills" class="skils-grid">
      <h2>Technical Skills</h2>
      <div className="skill-card">
        {skills.map((category) => (
          <div key={category.title} className="card">
            <h3>{category.title}</h3>
            <div className="skill-list">
              {category.skills.map(skill => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
