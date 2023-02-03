import React, { useEffect, useState } from "react"
import { API_URL, API_KEY } from '../../config';
import { useParams } from 'react-router-dom';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

function Movie() {
  let { movieId } = useParams();

  const [movie, setMovie] = useState("");
  const [actors, setActors] = useState("");
  const [directors, setDirectors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

    const fetchItem = async () => {
      try {
        const reponse = await fetch(url);
        const json = await reponse.json();
        // console.log(json);
        setMovie(json);
      }
      catch (err) {
        console.log("error", err);
      }
    }
    fetchItem();

  }, [movieId])

  useEffect(() => {
    const url = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

    const fetchItem = async () => {
      try {
        const reponse = await fetch(url);
        const json = await reponse.json();
        // console.log(json);
        const directors = json.crew.filter((member) => member.job === "Director");
        // console.log(directors);
        setActors(json.cast)
        setDirectors(directors)
        setIsLoading(false)
      }
      catch (err) {
        console.log("error", err);
        // setError(err);
      }
    }
    fetchItem();

  }, [movieId])



  return (
    <div className="rmdb-movie">
      {movie ?
        <>
          <Navigation movie={movie} />
          <MovieInfo movie={movie} directors={directors} />
          <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
        </>
        : <div>NONONO</div>
      }

      {actors ?
        <div className="rmdb-movie-grid">
          <FourColGrid header={'Actors Yo'}>
            {actors.map((element, i) => {
              return <Actor key={i} actor={element} />
            })}
          </FourColGrid>
        </div>
        : null
      }

      {!actors && !isLoading ? <h1>No Movie Found!</h1> : null}
      {isLoading ? <Spinner /> : null}


    </div>
  )
}

export default Movie;