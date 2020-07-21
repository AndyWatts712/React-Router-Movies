import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


const MovieList = props => {
const {movieId} = useParams()
console.log(props)
console.log('MOVIE ID', movieId)
  const history = useHistory()
  function routeToMovie() {
    return history.push(`/movie/${movieId}`)
  }
  console.log(history)
  return (
    <div onClick = {() => {routeToMovie()}} 
    className="movie-list">
      {props.movie.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
