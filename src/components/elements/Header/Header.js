// A stateless component 
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    // React.createElement('div', {className: 'react_div'}, "This is a test");
    <div className="rmdb-header">
      <div className="rmdb-content">
        <img className="rmdb-logo" src="./Images/reactMovie_logo.png" alt="rmbd-logo" />
        <img className="rmdb-tmdb-logo" src="./Images/tmdb_logo.png" alt="tmbd-logo" />
      </div>
    </div>

  )
}

export default Header;