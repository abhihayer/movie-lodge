import React from "react";

const MovieCard = ({ movie, id }) => {
  console.log(`Rendering MovieCard for ${id}`);
  return (
    <div id={id} className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img src={movie.Poster} alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
