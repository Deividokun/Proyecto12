import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const Card = memo(({ movie, isFavorite, toggleFavorite }) => {
  const handleButtonClick = (event) => {
    event.stopPropagation(); 
    toggleFavorite(movie);
  };

  return (
    <article className="card1">
      <Link to={`/MovieDetail/${movie.id}`} className="card-link">
        <div className="card-image">
          <img src={movie.image} alt={`Imagen de ${movie.name}`} />
        </div>
      </Link>
      <div className="card-content">
        <h2>{movie.name}</h2>
        <p className="pcard">Raza: {movie.race}</p>
        <button onClick={handleButtonClick}>
          {isFavorite ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
        </button>
      </div>
    </article>
  );
});

export default Card;
