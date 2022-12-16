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
  removeOneMovie,
  setCategoriesData,
  setSelectedCategoriesData,
  removeSelectedCategory,
  clearSelectedCategories,
  reactToOneMovie,
  setNumberOfResultsPerPage,
  setOffSet,
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
    numberOfResultsPerPage,
    offSet,
  } = useSelector((state) => state);

  const moviesLength = movies.length;

  const handleCategoriesData = (moviesData) => {
    const categoriesArray = moviesData.map((element) => element.category);
    const filteredCategories = Array.from(new Set(categoriesArray));

    dispatch(setCategoriesData(filteredCategories));
  };

  const fetchMoviesData = async () => {
    try {
      const moviesData = await movies$;
      dispatch(setMoviesData(moviesData));
      dispatch(setFilteredMoviesData(moviesData));
      handleCategoriesData(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevResult = () => {
    console.log(offSet - numberOfResultsPerPage);
    dispatch(setOffSet(offSet - numberOfResultsPerPage));
  };

  const handleNextResult = () => {
    console.log(offSet);
    dispatch(setOffSet(offSet + numberOfResultsPerPage));
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  useEffect(() => {
    handleCategoriesData(movies);
  }, [movies, filteredMovies]);

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
      <div className="movies-header">
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
        <div className="movies-pagination">
          <span
            className={
              offSet !== 0
                ? "movies-pagination-prev movies-pagination-prev--active"
                : "movies-pagination-prev"
            }
          >
            <i
              className="fa-solid fa-chevron-left"
              onClick={() => (offSet !== 0 ? handlePrevResult() : undefined)}
            />
          </span>
          <select
            name="pets"
            id="pet-select"
            className="movies-pagination-input"
            onChange={(e) =>
              dispatch(setNumberOfResultsPerPage(e.target.value))
            }
          >
            <option value="12">12</option>
            <option value="8">8</option>
            <option value="4">4</option>
          </select>
          <span
            className={
              offSet < moviesLength - offSet &&
              movies?.length > numberOfResultsPerPage
                ? "movies-pagination-next movies-pagination-next--active"
                : "movies-pagination-next"
            }
          >
            <i
              className="fa-solid fa-chevron-right"
              onClick={() =>
                offSet < moviesLength - offSet &&
                movies?.length > numberOfResultsPerPage
                  ? handleNextResult()
                  : undefined
              }
            />
          </span>
        </div>
      </div>
      <div className="movies-container">
        {filteredMovies?.map(
          (movie, id) =>
            id >= offSet &&
            id < offSet + numberOfResultsPerPage && (
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
                        onClick={() =>
                          dispatch(reactToOneMovie(movie.id, "like"))
                        }
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
                <div className="display-flex">
                  <p className="movies-card-category">{movie.category}</p>
                  <p
                    className="movies-card-delete"
                    onClick={() => dispatch(removeOneMovie(movie.id))}
                  >
                    supprimer
                  </p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

// == Export
export default Movies;
