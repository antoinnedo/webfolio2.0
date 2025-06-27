import React from 'react';

export const Footer = ({ name }) => {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
