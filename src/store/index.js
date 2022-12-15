/* eslint-disable default-param-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import { createStore } from "redux";

import {
  SET_MOVIES_DATA,
  SET_CATEGORIES_DATA,
  CHANGE_THEME_MODE,
} from "./actions";

const initialState = {
  movies: [],
  categories: [],
  themeMode: "light",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_DATA:
      return {
        ...state,
        movies: action.moviesData,
      };
    case SET_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.categoriesData,
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
