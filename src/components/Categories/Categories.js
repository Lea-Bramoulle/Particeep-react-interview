/* eslint-disable brace-style */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./categories.scss";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setFilteredMoviesData,
  setSelectedCategoriesData,
  removeSelectedCategory,
  clearSelectedCategories,
} from "../../store/actions";

// == Composant
function Categories() {
  const dispatch = useDispatch();

  const { movies, categories, selectedCategories } = useSelector(
    (state) => state
  );

  useEffect(() => {
    if (selectedCategories.length !== 0) {
      const filteredMoviesArray = [];

      selectedCategories?.forEach((category) => {
        filteredMoviesArray.push(
          ...movies.filter((movie) => movie.category === category)
        );
      });

      dispatch(setFilteredMoviesData(filteredMoviesArray));
    } else {
      dispatch(setFilteredMoviesData(movies));
    }
  }, [selectedCategories]);

  return (
    <div className="categories">
      {categories?.map((category) => (
        <p
          key={category}
          className={
            selectedCategories?.find((el) => el === category)
              ? "categories-element categories-element--active"
              : "categories-element"
          }
          onClick={() =>
            selectedCategories?.find((el) => el === category)
              ? dispatch(removeSelectedCategory(category))
              : dispatch(setSelectedCategoriesData(category))
          }
        >
          {category}
        </p>
      ))}
      <p
        className="categories-clear"
        onClick={() => {
          dispatch(setFilteredMoviesData(movies));
          dispatch(clearSelectedCategories());
        }}
      >
        <i className="fa-solid fa-arrow-rotate-left" /> clear
      </p>
    </div>
  );
}

// == Export
export default Categories;
