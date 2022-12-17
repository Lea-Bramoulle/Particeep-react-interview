/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
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

import Pagination from "../Pagination/Pagination";
import Categories from "../Categories/Categories";

import {
  setMoviesData,
  setFilteredMoviesData,
  removeOneMovie,
  setCategoriesData,
  reactToOneMovie,
} from "../../store/actions";

// == Composant
function Movies() {
  const dispatch = useDispatch();

  const {
    movies,
    filteredMovies,
    likedMovies,
    dislikedMovies,
    numberOfResultsPerPage,
    offSet,
  } = useSelector((state) => state);

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

  useEffect(() => {
    fetchMoviesData();
  }, []);

  useEffect(() => {
    handleCategoriesData(movies);
  }, [movies, filteredMovies]);

  return (
    <div className="movies">
      <h1 className="movies-title">Explore </h1>
      <div className="movies-header">
        <Categories />
        <Pagination />
      </div>
      <div className="movies-container">
        {filteredMovies?.map(
          (movie, id) =>
            id >= offSet &&
            id < offSet + numberOfResultsPerPage && (
              <div key={movie.id} className="movies-card">
                <div className="position-relative">
                  <img
                    src={require(`./../../assets/images/${movie.image}.jpeg`)}
                    alt={`Poster movie ${movie.title}`}
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
                          likedMovies.find((el) => el.id === movie.id)
                            ? dispatch(reactToOneMovie(movie.id, "unlike"))
                            : dispatch(reactToOneMovie(movie.id, "like"))
                        }
                      />{" "}
                      {movie.likes}
                    </span>

                    <span className="movies-card-likes--dislike">
                      {movie.dislikes}
                      <i
                        className={
                          dislikedMovies.find((el) => el.id === movie.id)
                            ? "fa-regular fa-thumbs-down fa-regular fa-thumbs-down--active"
                            : "fa-regular fa-thumbs-down"
                        }
                        onClick={() =>
                          dislikedMovies.find((el) => el.id === movie.id)
                            ? dispatch(reactToOneMovie(movie.id, "undislike"))
                            : dispatch(reactToOneMovie(movie.id, "dislike"))
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
