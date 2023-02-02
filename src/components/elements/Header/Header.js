// A stateless component 
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="rmdb-header">
      <div className="rmdb-content">
        <Link to='/'>
          <img className="rmdb-logo" src="/images/reactMovie_logo.png" alt="rmbd-logo" />
        </Link>

        <img className="rmdb-tmdb-logo" src="/images/tmdb_logo_new.png" alt="tmbd-logo" />
      </div>
    </div>

  )
}

export default Header;