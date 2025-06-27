import React, { useState, useEffect } from 'react';
// import './App.css'; // <-- 1. You would import your CSS file here.

// You can create more sophisticated icons (e.g., a sun and a moon)
const SunIcon = () => '☀️';
const MoonIcon = () => '🌙';

/**
 * A button component for toggling the theme.
 * @param {object} props - The component props.
 * @param {string} props.theme - The current theme ('light' or 'dark').
 * @param {Function} props.toggleTheme - The function to toggle the theme.
 */
const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      <span className="tooltip-text">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </span>
    </button>
  );
};

/**
 * The main App component.
 * This is where you will manage the theme state for the entire application.
 */
export default function App() {
  // State Management: Default theme is 'light'
  const [theme, setTheme] = useState('light');

  // Theme Toggling Logic
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Applying the theme to the document
  // This useEffect hook runs whenever the `theme` state changes.
  useEffect(() => {
    // It removes the old theme class and adds the new one to the `<body>` tag.
    document.body.className = '';
    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  return (
    <>
      {/* The ThemeStyles component has been removed. */}

      {/* The content of your application */}
      <div className="app-container">
        <header>
          <h1>My Portfolio</h1>
          {/* The button to toggle the theme */}
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </header>

        <main>
          <section className="card">
            <h2>About Me</h2>
            <p>This is a sample card to demonstrate the theme change.</p>
          </section>
          <section className="card">
            <h2>My Skills</h2>
            <p>The background, text, and border colors will all update when you toggle the theme.</p>
          </section>
        </main>
      </div>
    </>
  );
}
