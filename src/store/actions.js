/* eslint-disable quotes */
export const SET_MOVIES_DATA = "SET_MOVIES_DATA";
export const SET_CATEGORIES_DATA = "SET_CATEGORIES_DATA";
export const CHANGE_THEME_MODE = "CHANGE_THEME_MODE";

export const changeThemeMode = () => ({
  type: CHANGE_THEME_MODE,
});

export const setMoviesData = (moviesData) => ({
  type: SET_MOVIES_DATA,
  moviesData,
});

export const setCategoriesData = (categoriesData) => ({
  type: SET_CATEGORIES_DATA,
  categoriesData,
});
