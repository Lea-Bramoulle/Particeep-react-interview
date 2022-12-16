/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable brace-style */
/* eslint-disable quotes */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// == Import
import "./Movies.scss";
import { movies$ } from "../../data/movies";
import {
  setMoviesData,
  setFilteredMoviesData,
  setCategoriesData,
  setSelectedCategoriesData,
  removeSelectedCategory,
  clearSelectedCategories,
  reactToOneMovie,
} from "../../store/actions";

// == Composant
function Movies() {
  const dispatch = useDispatch();

  const {
    movies,
    filteredMovies,
    categories,
    selectedCategories,
    likedMovies,
    dislikedMovies,
  } = useSelector((state) => state);

  const fetchMoviesData = async () => {
    try {
      const moviesData = await movies$;
      dispatch(setMoviesData(moviesData));
      dispatch(setFilteredMoviesData(moviesData));

      const categoriesArray = moviesData.map((element) => element.category);
      const filteredCategories = Array.from(new Set(categoriesArray));

      dispatch(setCategoriesData(filteredCategories));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

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
    <div className="movies">
      <h1 className="movies-title">Explore </h1>
      <div className="movies-categories">
        {categories?.map((category) => (
          <p
            key={category}
            className={
              selectedCategories?.find((el) => el === category)
                ? "movies-categories-element movies-categories-element--active"
                : "movies-categories-element "
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
          className="movies-categories-clear"
          onClick={() => {
            dispatch(setFilteredMoviesData(movies));
            dispatch(clearSelectedCategories());
          }}
        >
          <i className="fa-solid fa-arrow-rotate-left" /> clear
        </p>
      </div>
      <div className="movies-container">
        {filteredMovies?.map((movie) => (
          <div key={movie.id} className="movies-card">
            <div className="position-relative">
              <img
                src="https://images.affiches-et-posters.com//albums/3/2619/medium/affiche-film-gladiator-164.jpg"
                alt="movie Poster"
              />
              <div className="movies-card-likes">
                <span className="movies-card-likes--like">
                  <i
                    className={
                      likedMovies.find((el) => el.id === movie.id)
                        ? "fa-regular fa-thumbs-up fa-regular fa-thumbs-up--active"
                        : "fa-regular fa-thumbs-up"
                    }
                    onClick={() => dispatch(reactToOneMovie(movie.id, "like"))}
                  />{" "}
                  {movie.likes}
                </span>

                <span className="movies-card-likes--dislike">
                  {movie.dislikes}{" "}
                  <i
                    className={
                      dislikedMovies.find((el) => el.id === movie.id)
                        ? "fa-regular fa-thumbs-down fa-regular fa-thumbs-down--active"
                        : "fa-regular fa-thumbs-down"
                    }
                    onClick={() =>
                      dispatch(reactToOneMovie(movie.id, "dislike"))
                    }
                  />
                </span>
              </div>
            </div>
            <h2 className="movies-card-title">{movie.title}</h2>
            <p className="movies-card-category">{movie.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// == Export
export default Movies;
