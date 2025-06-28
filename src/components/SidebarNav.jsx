import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EducationIcon from '@mui/icons-material/School';
import ExperienceIcon from '@mui/icons-material/Work';
import SkillsIcon from '@mui/icons-material/Laptop';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactIcon from '@mui/icons-material/Call';

const HamburgerIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>;

// Exporting these for App.jsx
export const navItems = [
  { name: 'Home', href: '#header-intro', icon: <HomeIcon /> },
  { name: 'Education', href: '#education', icon: <EducationIcon /> },
  { name: 'Experience', href: '#experience', icon: <ExperienceIcon /> },
  { name: 'Skills', href: '#skills', icon: <SkillsIcon /> },
  { name: 'Projects', href: '#projects', icon: <GitHubIcon /> },
  { name: 'Contact', href: '#contact', icon: <ContactIcon /> },
];



export const SidebarNav = ({ activeSection }) => {
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <nav className={`sidebar-nav ${toggled ? 'is-open' : ''}`}>
        <div className="nav-links">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              // Add 'active' class if the activeSection matches this link's href
              className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>
      </nav>

      <nav className="hamburger-container">
        <button
          className={`hamburger-btn ${toggled ? 'toggled' : ''}`}
          onClick={()=>setToggled(!toggled)}
        >
          <HamburgerIcon/>
        </button>
      </nav>
    </>
  );
};
