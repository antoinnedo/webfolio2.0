import React from 'react';
import MoonIcon from '@mui/icons-material/DarkModeRounded';
import SunIcon from '@mui/icons-material/LightModeRounded';


export const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <>
      <div className='darkmode'>
        <button id = 'theme-toggle' onClick={ onToggle }>
          {isDarkMode ? <SunIcon id='dark-mode-icon' sx={{ color: (theme) => theme.palette.custom.colorp}} /> : <MoonIcon id='light-mode-icon' />}
        </button>
      </div>
    </>
  );
};
