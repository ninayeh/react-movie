import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
  return(
    <div className='rmdb-moviethumb' >
      <img alt={props.title} src={props.image} />
    </div>
  )
}

export default MovieThumb;