/* eslint-disable default-param-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import { createStore } from "redux";

import {
  SET_MOVIES_DATA,
  SET_FILTERED_MOVIES_DATA,
  SET_CATEGORIES_DATA,
  SET_SELECTED_CATEGORIES_DATA,
  REMOVE_SELECTED_CATEGORY,
  CLEAR_SELECTED_CATEGORIES,
  CHANGE_THEME_MODE,
} from "./actions";

const initialState = {
  movies: [],
  filteredMovies: [],
  categories: [],
  selectedCategories: [],
  themeMode: "light",
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
