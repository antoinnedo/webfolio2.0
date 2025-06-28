import React from 'react';
import MoonIcon from '@mui/icons-material/DarkModeRounded';
import SunIcon from '@mui/icons-material/LightModeRounded';
import theme from '../styles/theme';


export const ThemeToggle = ({ isDarkMode, onToggle }) => {
  const iconStyles = {
    // Common styles for both icons
    borderRadius: '50%',
    height: '3.125rem',
    width: '3.125rem',
  };

  return (
    <>
      <div className='darkmode'>
        {/* You can style the button itself with the sx prop too */}
        <button id='theme-toggle' onClick={onToggle}>
          {isDarkMode
            ? <SunIcon color="backgroundCard"
                sx={{
                  ...iconStyles,
                  // Use the theme object to set colors
                  background: (theme) => theme.palette.custom.colorp,
                  color: (theme) => theme.palette.custom.colorbody,
                }}
              />
            : <MoonIcon color="backgroundCard"
                sx={{
                  ...iconStyles,
                  // These colors will be from the light theme automatically
                  background: (theme) => theme.palette.custom.colorbody,
                  color: (theme) => theme.palette.custom.colorp,
                }}
              />
          }
        </button>
      </div>
    </>
  );
};
