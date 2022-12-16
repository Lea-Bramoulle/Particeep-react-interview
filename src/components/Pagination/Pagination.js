/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable global-require */
/* eslint-disable quotes */
// == Import
import "./Pagination.scss";

import { useDispatch, useSelector } from "react-redux";

import { setNumberOfResultsPerPage, setOffSet } from "../../store/actions";
// == Composant
function Pagination() {
  const dispatch = useDispatch();

  const { movies, filteredMovies, numberOfResultsPerPage, offSet } =
    useSelector((state) => state);

  const moviesLength = movies.length;

  const handlePrevResult = () => {
    dispatch(setOffSet(offSet - numberOfResultsPerPage));
  };

  const handleNextResult = () => {
    dispatch(setOffSet(offSet + numberOfResultsPerPage));
  };

  return (
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
        onChange={(e) => {
          dispatch(setNumberOfResultsPerPage(e.target.value));
          dispatch(setOffSet(0));
        }}
      >
        <option value="12">12</option>
        <option value="8">8</option>
        <option value="4">4</option>
      </select>
      <span
        className={
          offSet < moviesLength - offSet &&
          filteredMovies?.length > numberOfResultsPerPage
            ? "movies-pagination-next movies-pagination-next--active"
            : "movies-pagination-next"
        }
      >
        <i
          className="fa-solid fa-chevron-right"
          onClick={() =>
            offSet < moviesLength - offSet &&
            filteredMovies?.length > numberOfResultsPerPage
              ? handleNextResult()
              : undefined
          }
        />
      </span>
    </div>
  );
}

// == Export
export default Pagination;
