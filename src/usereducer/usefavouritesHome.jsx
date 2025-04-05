import { useEffect, useReducer } from 'react';


const favoritesReducer = (state, action) => {
  if (!Array.isArray(state)) state = []; 

  switch (action.type) {
    case "ADD_FAVORITE":
      if (!state.some(fav => fav.id === action.payload.id)) {
        return [...state, action.payload];
      }
      return state;

    case "REMOVE_FAVORITE":
      return state.filter(fav => fav.id !== action.payload.id);

    default:
      return state;
  }
};


const useFavorites = () => {
  const storedFavorites = localStorage.getItem("favorites");

  let initialFavorites;
  try {
    initialFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    if (!Array.isArray(initialFavorites)) {
      initialFavorites = [];
    }
  } catch (error) {
    console.error("Error parsing favorites from localStorage:", error);
    initialFavorites = [];
  }

  const [favorites, dispatch] = useReducer(favoritesReducer, initialFavorites);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      dispatch({ type: "REMOVE_FAVORITE", payload: movie });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: movie });
    }
  };

  return { favorites, toggleFavorite };
};

export default useFavorites;
