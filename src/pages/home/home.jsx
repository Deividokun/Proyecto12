import React from 'react';
import Card from '../../components/card/Card';
import useFetch from '../../hooks/useFetch';
import useFavorites from '../../usereducer/usefavouritesHome';
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
        <Card
          key={movie.id}
          movie={movie}
          isFavorite={Array.isArray(favorites) && favorites.some((fav) => fav.id === movie.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </section>
  );
}

export default Home;
