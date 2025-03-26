import React, { useCallback } from 'react';
import Card from '../../components/card/Card';
import useFetch from '../../hooks/useFetch';
import useFavorites from "../../usereducer/usefavouritesHome";
import './home.css';

function Home() {
  const { data: movies, loading, error } = useFetch('https://dragonball-api.com/api/characters');
  const { favorites, toggleFavorite } = useFavorites();

  // Memoriza la función toggleFavorite para evitar recrearla en cada renderizado
  const handleToggleFavorite = useCallback((movie) => {
    toggleFavorite(movie);
  }, [toggleFavorite]);

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
          isFavorite={favorites.some((fav) => fav.id === movie.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </section>
  );
}

export default Home;