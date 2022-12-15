/* eslint-disable brace-style */
/* eslint-disable quotes */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// == Import
import "./Movies.scss";
import { movies$ } from "../../data/movies";
import { setMoviesData, setCategoriesData } from "../../store/actions";

// == Composant
function Movies() {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);
  const categories = useSelector((state) => state.categories);

  const fetchMoviesData = async () => {
    try {
      const moviesData = await movies$;
      dispatch(setMoviesData(moviesData));

      const categoriesArray = moviesData.map((element) => element.category);
      const filteredCategories = Array.from(new Set(categoriesArray));

      dispatch(setCategoriesData(filteredCategories));
    } catch (error) {
      console.error(error);
    }
  };

  const getMoviesCategories = () => {};

  useEffect(() => {
    fetchMoviesData();
    getMoviesCategories();
  }, []);

  return (
    <div className="movies">
      <h1 className="movies-title">Explore </h1>
      <div className="movies-categories">
        {categories?.map((category) => (
          <p
            key={category}
            className="movies-categories-element movies-categories-element--active"
          >
            {category}
          </p>
        ))}
        <p className="movies-categories-clear">
          <i className="fa-solid fa-arrow-rotate-left" /> clear
        </p>
      </div>
      <div className="movies-container">
        {movies?.map((movie) => (
          <div key={movie.id} className="movies-card">
            <div className="position-relative">
              <img
                src="https://images.affiches-et-posters.com//albums/3/2619/medium/affiche-film-gladiator-164.jpg"
                alt="movie Poster"
              />
              <div className="movies-card-likes">
                <span className="movies-card-likes--like">
                  <i className="fa-regular fa-thumbs-up" /> {movie.likes}
                </span>

                <span className="movies-card-likes--dislike">
                  {movie.dislikes} <i className="fa-regular fa-thumbs-down" />
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
