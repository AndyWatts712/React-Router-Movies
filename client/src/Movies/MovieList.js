import React from 'react';
import { useHistory } from 'react-router-dom';


const MovieList = props => {
console.log(props)
  const hist = useHistory()
  
  return (
    
    <div onClick = {hist.pushState(`/movie/${props.movie.id}`)} className="movie-list">
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
