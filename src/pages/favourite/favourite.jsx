import React from 'react';
import useFavorites from '../../hooks/useFavourite';
import './favourite.css';

function Favourite() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <section className="character-listt">
      <h1 className="title">Mis favoritos</h1>
      {favorites.length > 0 ? (
        <ul className="favourites-container">
          {favorites.map((movie) => (
            <li className="card" key={movie.id}>
              <h2>{movie.name}</h2>
              <img src={movie.image} alt={`Imagen de ${movie.name}`} />
              <button onClick={() => removeFavorite(movie.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-favourites">No tienes favoritos aún.</p>
      )}
    </section>
  );
}

export default Favourite;
