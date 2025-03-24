import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import useFavorites from "../../usereducer/usefavouritesHome";
import './home.css';

function Home() {
  const { data: movies, loading, error } = useFetch('https://dragonball-api.com/api/characters');
  const { favorites, toggleFavorite } = useFavorites();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!movies || !Array.isArray(movies.items)) {
    return <p>No se encontraron personajes.</p>;
  }

  return (
    <section className="character-list">
      {movies.items.map((movie) => (
        <article className="card1" key={movie.id}>
          <Link to={`/MovieDetail/${movie.id}`} className="card-link">
            <div className="card-image">
              <img src={movie.image} alt={`Imagen de ${movie.name}`} />
            </div>
            <div className="card-content">
              <h2>{movie.name}</h2>
              <p>Raza: {movie.race}</p>
            </div>
          </Link>
          <button onClick={() => toggleFavorite(movie)}>
            {favorites.some((fav) => fav.id === movie.id)
              ? 'Eliminar de favoritos'
              : 'Añadir a favoritos'}
          </button>
        </article>
      ))}
    </section>
  );
}

export default Home;
