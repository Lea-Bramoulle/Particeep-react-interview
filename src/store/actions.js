/* eslint-disable quotes */
export const SET_MOVIES_DATA = "SET_MOVIES_DATA";
export const SET_FILTERED_MOVIES_DATA = "SET_FILTERED_MOVIES_DATA";
export const SET_CATEGORIES_DATA = "SET_CATEGORIES_DATA";
export const CHANGE_THEME_MODE = "CHANGE_THEME_MODE";
export const SET_SELECTED_CATEGORIES_DATA = "SET_SELECTED_CATEGORIES_DATA";
export const REMOVE_SELECTED_CATEGORY = "REMOVE_SELECTED_CATEGORY";
export const CLEAR_SELECTED_CATEGORIES = "CLEAR_SELECTED_CATEGORIES";

export const changeThemeMode = () => ({
  type: CHANGE_THEME_MODE,
});

export const setMoviesData = (moviesData) => ({
  type: SET_MOVIES_DATA,
  moviesData,
});

export const setFilteredMoviesData = (moviesData) => ({
  type: SET_FILTERED_MOVIES_DATA,
  moviesData,
});

export const setCategoriesData = (categoriesData) => ({
  type: SET_CATEGORIES_DATA,
  categoriesData,
});

export const setSelectedCategoriesData = (category) => ({
  type: SET_SELECTED_CATEGORIES_DATA,
  category,
});

export const removeSelectedCategory = (category) => ({
  type: REMOVE_SELECTED_CATEGORY,
  category,
});

export const clearSelectedCategories = () => ({
  type: CLEAR_SELECTED_CATEGORIES,
});
