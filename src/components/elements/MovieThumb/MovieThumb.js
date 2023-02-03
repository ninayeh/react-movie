import React from 'react';
import {Link} from 'react-router-dom';
import './MovieThumb.css';

const MovieThumb = (props) => {
  return(
    <div className='rmdb-moviethumb' >
      {props.clickable ?
        <Link to={`${props.movieId}`} state={{ some: "value" }} >
          <img alt="moviethumb" src={props.image} />
        </Link>  
        :
        <img alt="moviethumb" src={props.image} /> 
      }
    </div>
  )
}

export default MovieThumb;