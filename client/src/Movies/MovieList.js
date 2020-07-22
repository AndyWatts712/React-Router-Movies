import React from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';


const MovieList = props => {

  console.log(props)
  return (
    <div className="movie-list">
      {props.movie.map(movie => (
        <Link to={`/movie/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
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
