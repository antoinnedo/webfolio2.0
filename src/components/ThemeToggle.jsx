import React from 'react';
import MoonIcon from '@mui/icons-material/DarkModeRounded';
import SunIcon from '@mui/icons-material/LightModeRounded';


export const ThemeToggle = ({ isDarkMode, onToggle }) => {
  const iconStyles = {
    fill: 'var(--background-secondary)',
    position: 'absolute',
    transition: 'all var(--transition-speed-normal) ease',
  };

  return (
    <>
      <div className='darkmode'>
        <button id='theme-toggle' onClick={onToggle}>
          <div className="toggle-svg-container">
            <MoonIcon color="backgroundCard"
              sx={{
                ...iconStyles,
                background: (theme) => theme.palette.custom.colorbody,
                color: (theme) => theme.palette.custom.colorp,
                transform: `translateY(${isDarkMode ? 0 : 4}rem)`,
              }}
            />
            <SunIcon color="backgroundCard"                 
              sx={{
                ...iconStyles,
                background: (theme) => theme.palette.custom.colorp,
                color: (theme) => theme.palette.custom.colorbody,
                transform: `translateY(${isDarkMode ? 0 : 4}rem)`,
              }}
            />
          </div>
        </button>
      </div>
    </>
  );
};
