import { useEffect, useReducer } from 'react';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const isFavorite = state.some((fav) => fav.id === action.payload.id);
      const updatedState = isFavorite
        ? state.filter((fav) => fav.id !== action.payload.id)
        : [...state, action.payload];

      localStorage.setItem('favorites', JSON.stringify(updatedState));
      return updatedState;

    case 'SET_FAVORITES':
      return action.payload;

    default:
      return state;
  }
};

function useFavorites() {
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch({ type: 'SET_FAVORITES', payload: storedFavorites });
  }, []);

  const toggleFavorite = (movie) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: movie });
  };

  return { favorites, toggleFavorite };
}

export default useFavorites;
