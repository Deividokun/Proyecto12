import { useEffect, useReducer } from 'react';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.some((fav) => fav.id === action.payload.id);
      return isFavorite
        ? state.filter((fav) => fav.id !== action.payload.id)
        : [...state, action.payload];

    default:
      return state;
  }
};

function useFavorites() {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: movie });
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;