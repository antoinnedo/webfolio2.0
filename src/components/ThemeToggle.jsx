import React, { useState } from 'react';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';


export const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle-button" onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      <span className="tooltip-text">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </span>
    </button>
  );
};
