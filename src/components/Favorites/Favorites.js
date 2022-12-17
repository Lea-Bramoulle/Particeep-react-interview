/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Favorites.scss";

import { useSelector, useDispatch } from "react-redux";

import { reactToOneMovie } from "../../store/actions";

// == Composant
function Favorites() {
  const dispatch = useDispatch();

  const { likedMovies, toggleSidebar } = useSelector((state) => state);

  return (
    <div
      className={
        toggleSidebar ? "favorites sidebar-full" : "favorites sidebar-min"
      }
    >
      {likedMovies?.map((movie) => (
        <div className="favorites-card " key={movie.id}>
          <img
            src={require(`./../../assets/images/${movie.image}.jpeg`)}
            alt={`Poster movie ${movie.title}`}
            className="favorites-card-img"
          />
          <div className="favorites-card-like">
            <i
              className="fa-solid fa-heart"
              onClick={() => dispatch(reactToOneMovie(movie.id, "unlike"))}
            />
          </div>
          {toggleSidebar && (
            <div className="favorites-card-content">
              <p className="favorites-card-title">{movie.title}</p>
              <p className="favorites-card-subtitle">{movie.category}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// == Export
export default Favorites;
