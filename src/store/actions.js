/* eslint-disable quotes */
export const SET_MOVIES_DATA = "SET_MOVIES_DATA";
export const SET_FILTERED_MOVIES_DATA = "SET_FILTERED_MOVIES_DATA";
export const REMOVE_ONE_MOVIE = "REMOVE_ONE_MOVIE";
export const SET_CATEGORIES_DATA = "SET_CATEGORIES_DATA";
export const CHANGE_THEME_MODE = "CHANGE_THEME_MODE";
export const SET_SELECTED_CATEGORIES_DATA = "SET_SELECTED_CATEGORIES_DATA";
export const REMOVE_SELECTED_CATEGORY = "REMOVE_SELECTED_CATEGORY";
export const CLEAR_SELECTED_CATEGORIES = "CLEAR_SELECTED_CATEGORIES";
export const SET_REACTION_TO_ONE_MOVIE = "SET_REACTION_TO_ONE_MOVIE";
export const CHANGE_NB_RESULTS_PER_PAGE = "CHANGE_NB_RESULTS_PER_PAGE";
export const CHANGE_OFFSET = "CHANGE_OFFSET";
export const SET_TOGGLE_SIDEBAR = "SET_TOGGLE_SIDEBAR";

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

export const removeOneMovie = (movieId) => ({
  type: REMOVE_ONE_MOVIE,
  movieId,
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

export const reactToOneMovie = (movieId, reactionType) => ({
  type: SET_REACTION_TO_ONE_MOVIE,
  movieId,
  reactionType,
});

export const setNumberOfResultsPerPage = (value) => ({
  type: CHANGE_NB_RESULTS_PER_PAGE,
  value,
});

export const setOffSet = (value) => ({
  type: CHANGE_OFFSET,
  value,
});

export const setToggleSidebar = () => ({
  type: SET_TOGGLE_SIDEBAR,
});
