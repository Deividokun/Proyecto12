import React, { memo } from 'react';
import Card from '../../components/card/Card';
import useFavorites from "../../usereducer/usefavouritesHome";
import './favourite.css';

const Favourite = () => {
  const { favorites, toggleFavorite } = useFavorites();
  

  if (favorites.length === 0) {
    return <p className='therearenot'>No tienes personajes favoritos.</p>;
  }

  return (
    <section className="favourites-container">
      <h1>Mis favoritos:</h1>
      <article className="favouritescardarticle">
        {favorites.map((movie) => (
          <Card
            key={movie.id}
            movie={movie}
            isFavorite={true}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </article>
    </section>
  );
};

export default memo(Favourite);