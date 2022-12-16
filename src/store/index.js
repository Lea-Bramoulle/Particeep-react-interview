/* eslint-disable operator-linebreak */
/* eslint-disable brace-style */
/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import { createStore } from "redux";

import {
  SET_MOVIES_DATA,
  SET_FILTERED_MOVIES_DATA,
  REMOVE_ONE_MOVIE,
  SET_CATEGORIES_DATA,
  SET_SELECTED_CATEGORIES_DATA,
  REMOVE_SELECTED_CATEGORY,
  CLEAR_SELECTED_CATEGORIES,
  SET_REACTION_TO_ONE_MOVIE,
  CHANGE_NB_RESULTS_PER_PAGE,
  CHANGE_OFFSET,
  CHANGE_THEME_MODE,
  SET_TOGGLE_SIDEBAR,
} from "./actions";

const initialState = {
  movies: [],
  filteredMovies: [],
  categories: [],
  selectedCategories: [],
  likedMovies: [],
  dislikedMovies: [],
  numberOfResultsPerPage: 12,
  offSet: 0,
  themeMode: "light",
  toggleSidebar: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_DATA:
      return {
        ...state,
        movies: action.moviesData,
      };
    case SET_FILTERED_MOVIES_DATA:
      return {
        ...state,
        filteredMovies: action.moviesData,
      };
    case REMOVE_ONE_MOVIE:
      return {
        ...state,
        movies: [...state.movies].filter(
          (movie) => movie.id !== action.movieId
        ),
        filteredMovies: [...state.filteredMovies].filter(
          (movie) => movie.id !== action.movieId
        ),
      };
    case SET_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.categoriesData,
      };
    case SET_SELECTED_CATEGORIES_DATA:
      return {
        ...state,
        selectedCategories: [...state.selectedCategories, action.category],
      };
    case REMOVE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategories: [
          ...state.selectedCategories.filter((el) => el !== action.category),
        ],
      };
    case CLEAR_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: [],
      };
    case SET_REACTION_TO_ONE_MOVIE:
      const moviesData = [...state.movies];
      let likedMovies = [...state.likedMovies];
      let dislikedMovies = [...state.dislikedMovies];

      const selectedMovie = moviesData.find(
        (movie) => movie.id === action.movieId
      );

      if (
        action.reactionType === "like" &&
        !likedMovies.find((movie) => movie.id === selectedMovie.id)
      ) {
        if (!dislikedMovies.find((movie) => movie.id === selectedMovie.id)) {
          selectedMovie.likes += 1;
          likedMovies.push(selectedMovie);
        } else {
          selectedMovie.likes += 1;
          selectedMovie.dislikes -= 1;
          likedMovies.push(selectedMovie);
          dislikedMovies = [...state.dislikedMovies].filter(
            (movie) => selectedMovie.id !== movie.id
          );
        }
      } else if (
        action.reactionType === "dislike" &&
        !dislikedMovies.find((movie) => movie.id === selectedMovie.id)
      ) {
        if (!likedMovies.find((movie) => movie.id === selectedMovie.id)) {
          selectedMovie.dislikes += 1;
          dislikedMovies.push(selectedMovie);
        } else {
          selectedMovie.dislikes += 1;
          selectedMovie.likes -= 1;
          dislikedMovies.push(selectedMovie);
          likedMovies = [...state.likedMovies].filter(
            (movie) => selectedMovie.id !== movie.id
          );
        }
      } else if (action.reactionType === "unlike") {
        likedMovies = [...state.likedMovies].filter(
          (movie) => selectedMovie.id !== movie.id
        );
        selectedMovie.likes -= 1;
      }

      return {
        ...state,
        movies: moviesData,
        likedMovies,
        dislikedMovies,
      };
    case CHANGE_NB_RESULTS_PER_PAGE:
      return {
        ...state,
        numberOfResultsPerPage: Number(action.value),
      };
    case CHANGE_OFFSET:
      return {
        ...state,
        offSet: action.value,
      };
    case SET_TOGGLE_SIDEBAR:
      return {
        ...state,
        toggleSidebar: !state.toggleSidebar,
      };
    case CHANGE_THEME_MODE:
      if (state.themeMode === "light") {
        return {
          ...state,
          themeMode: "dark",
        };
      }
      return {
        ...state,
        themeMode: "light",
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
