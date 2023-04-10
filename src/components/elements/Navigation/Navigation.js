import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to='/react-movie'>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>{props.movie.original_title}</p>
      </div>
    </div>
  )
}

export default Navigation;