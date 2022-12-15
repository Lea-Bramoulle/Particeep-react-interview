/* eslint-disable brace-style */
/* eslint-disable quotes */

import { useEffect } from "react";

// == Import
import "./Movies.scss";
import { movies$ } from "../../data/movies";

// == Composant
function Movies() {
  const fetchMoviesData = async () => {
    try {
      const moviesData = await movies$;
      console.log(moviesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <div className="movies">
      <h1 className="movies-title">Explore </h1>
      <div className="movies-container">
        <div className="movies-card">
          <img
            src="https://images.affiches-et-posters.com//albums/3/2619/medium/affiche-film-gladiator-164.jpg"
            alt="movie Poster"
          />
          <h2 className="movies-card-title">Ocean 8</h2>
          <p className="movies-card-category">Humour</p>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Movies;
