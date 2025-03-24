import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './movieDetail.css';

function MovieDetail() {
  const { id } = useParams(); 
  const { data: movieDetails, loading, error } = useFetch(
    `https://dragonball-api.com/api/characters/${id}`
  );

  if (loading) return <p>Cargando detalles...</p>;
  if (error) return <p>Error al cargar los detalles: {error}</p>;

  return (
    <div className="movie-detail">
      {movieDetails ? (
        <>
          <h1>{movieDetails.name}</h1>
          <img src={movieDetails.image} alt={movieDetails.name} />
          <h2>Raza:</h2>
          <p>{movieDetails.race}</p>
          <h2>Descripción:</h2>
          <p>{movieDetails.description}</p>
        </>
      ) : (
        <p>No se encontraron detalles para este personaje.</p>
      )}
    </div>
  );
}

export default MovieDetail;