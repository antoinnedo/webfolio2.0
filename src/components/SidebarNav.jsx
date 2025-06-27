import React from 'react';

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>;
const EducationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-17.7 0-32 14.3-32 32V96H128V32c0-17.7-14.3-32-32-32S64 14.3 64 32V96H32C14.3 96 0 110.3 0 128V448c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V128c0-17.7-14.3-32-32-32H576V32c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32V96H352V32c0-17.7-14.3-32-32-32zM128 248c0-13.3 10.7-24 24-24H272c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H152c-13.3 0-24-10.7-24-24V248zm224 0v48c0 13.3-10.7 24-24 24H384c-13.3 0-24-10.7-24-24V248c0-13.3 10.7-24 24-24H504c13.3 0 24 10.7 24 24z"/></svg>;
const ExperienceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 0c13.3 0 24 10.7 24 24V48H304V24c0-13.3 10.7-24 24-24s24 10.7 24 24V48h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H56c-35.3 0-64-28.7-64-64V112c0-35.3 28.7-64 64-64h40V24c0-13.3 10.7-24 24-24s24 10.7 24 24V48h40V24zM64 160v24h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H64zm112 0v24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H176zm120 0v24h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H296zm-96 96v24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H200z"/></svg>;
const SkillsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5-12.5-32.8-12.5-45.3 0L281.4 268.1c-12.5 12.5-12.5 32.8 0 45.3l146.7 146.7c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L349.5 313.5l123.9-123.9c12.5-12.5 12.5-32.8 0-45.3zM9.4 281.4c-12.5-12.5-12.5-32.8 0-45.3l146.7-146.7c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L54.5 268.1l146.7 146.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L9.4 281.4z"/></svg>;
const ProjectsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 64V256H256V64H64zm224 0V256H448V64H288zM64 288V448H256V288H64zm224 0V448H448V288H288z"/></svg>;
const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM0 256v64c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V256c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48zM464 448c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48H464z"/></svg>;

export const navItems = [
  { name: 'Home', href: '#header-intro', icon: <HomeIcon /> },
  { name: 'Education', href: '#education', icon: <EducationIcon /> },
  { name: 'Experience', href: '#experience', icon: <ExperienceIcon /> },
  { name: 'Skills', href: '#skills', icon: <SkillsIcon /> },
  { name: 'Projects', href: '#projects', icon: <ProjectsIcon /> },
  { name: 'Contact', href: '#contact', icon: <ContactIcon /> },
];

export const SidebarNav = ({ activeSection }) => {
  return (
    <nav className="sidebar-nav">
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
  );
};
