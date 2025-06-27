import React, { useState, useEffect } from 'react';
import './styles/App.css';

// Component Imports
import { Contacts } from './components/Contacts';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
// Import the Sidebar and its data
import { SidebarNav, navItems } from './components/SidebarNav';

// Asset Imports
import pongDemo from './assets/PongDemo.gif';
import project2048 from './assets/project2048.gif';
import ticTacToe from './assets/TicTacToeJS.gif'; 
import hangMan from './assets/Hangman.gif'; 
import chessGame from './assets/ChessGame.gif'; 
import connectFour from './assets/ConnectFour.gif'; 

// Data Definitions
const personalInfo = {
  name: "Hi, I'm Anthony Do",
  title: "Computer Science Junior @Texas Christian University",
  bio: `I enjoy a matcha cup and an afternoon session of hard-coding.`
};

const educationInfo = {
  university: "Texas Christian University",
  degree: "Bachelor of Science in Computer Science",
  period: "August 2023 – May 2027",
  location: "Fort Worth, TX",
  gpa: "3.71",
  honors: "Dean's List",
  details: [
    "Comprehensive coursework in Data Structures and Algorithms, Object-Oriented Programming",
    "Advanced studies in Computer Architecture, Compiler Design, and Web Technologies",
    "Strong foundation in Linux/Unix systems, Calculus, Discrete Math, and Linear Algebra"
  ]
};

const projectsData = [
    {
      title: 'Ping Pong Game',
      desc: 'A classic arcade game recreated in Java using AWT and Swing libraries. Features collision detection, smooth gameplay mechanics, and responsive controls.',
      tech: ['Java', 'AWT', 'Swing'],
      image: pongDemo
    }, {
      title: 'Hangman Game',
      desc: 'Classic word-guessing game with dynamic word selection and interactive console interface.',
      tech: ['Ruby'],
      image: hangMan
    }, {
      title: '2048',
      desc: 'Implementation of the popular number puzzle game with smooth animations and responsive design. Built with vanilla JavaScript for optimal performance.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: project2048
    }, {
      title: 'Tic Tac Toe',
      desc: 'Interactive web-based version of the classic strategy game featuring AI opponent, win detection algorithms, and clean user interface design.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      image: ticTacToe
    }, {
      title: 'Connect Four',
      desc: 'Terminal-based Connect Four game with strategic AI and win detection algorithms.',
      tech: ['Ruby'],
      image: connectFour
    }, {
      title: 'Chess Board',
      desc: 'Complete chess implementation in Ruby featuring all piece movements, castling, en passant, check/checkmate detection, and console-based interface.',
      tech: ['Ruby'],
      image: chessGame
    }
];

const experienceInfo = [
  {
    company: "Rakuna HR Solutions Inc.",
    role: "Software Development Intern",
    period: "June 2025 – November 2025",
    location: "San Francisco, CA",
    details: [
      "Directly involved in the company's product development pipeline",
      "Deployed products that helped achieve 20% productivity increase through code optimization"
    ]
  },
  {
    company: "Texas Christian University",
    role: "STEM Tutor",
    period: "August 2024 – Present",
    location: "Fort Worth, TX",
    details: [
      "Tutored over 30 students in Computer Science, Math, and Physics courses",
      "Improved student grades by 1+ letter grade on average"
    ]
  }
];

const skillsData = [
    { title: 'Programming Languages', skills: ['Ruby', 'JavaScript', 'Python', 'Java', 'C++', 'C', 'TypeScript', 'Scala', 'Assembly'] },
    { title: 'Web Technologies', skills: ['HTML5', 'CSS3', 'React', 'Angular', 'Node.js', 'Rails', 'Django'] },
    { title: 'Databases & Tools', skills: ['SQLite', 'PostgreSQL', 'Git', 'Linux/Unix'] }
];

const contactInfo = {
    linkedIn: "https://www.linkedin.com/in/anthonydo2307/",
    email: "mailto:anthonydo2307@gmail.com",
    github: "https://github.com/antoinnedo"
};

export const App = () => {
  const [activeSection, setActiveSection] = useState('header-intro');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
    
    sections.forEach(sec => {
      if (sec) {
        observer.observe(sec);
      }
    });

    return () => {
      sections.forEach(sec => {
        if (sec) {
          observer.unobserve(sec);
        }
      });
    };
  }, []);


  return (
    <>
      <SidebarNav activeSection={activeSection} />
      <div className="main-content">
        {/* The Header is now wrapped in a section with the correct ID */}
        <section id="header-intro">
          <Header info={personalInfo} />
        </section>
        <main>
          <Education info={educationInfo} />
          <Experience jobs={experienceInfo} />
          <Skills skills={skillsData} />
          <Projects projects={projectsData} />
          <Contacts links={contactInfo} />
        </main>
        <Footer name={personalInfo.name} />
      </div>
      <div className="bottom-float">
          <a href="#header-intro" className="button">
            <svg className="svgIcon" viewBox="0 0 384 512">
              <path
                d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
              ></path>
            </svg>
          </a>
      </div>
    </>
  );
}
