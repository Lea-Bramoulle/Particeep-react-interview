/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Favorites.scss";

import { useSelector } from "react-redux";

// == Composant
function Favorites() {
  const { likedMovies } = useSelector((state) => state);

  return (
    <div className="favorites">
      {likedMovies?.map((movie) => (
        <div className="favorites-card">
          <img
            src="https://images.affiches-et-posters.com//albums/3/2619/medium/affiche-film-gladiator-164.jpg"
            alt="img movie"
            className="favorites-card-img"
          />
          <div className="favorites-card-like">
            <i className="fa-solid fa-heart" />
          </div>
        </div>
      ))}
    </div>
  );
}

// == Export
export default Favorites;
