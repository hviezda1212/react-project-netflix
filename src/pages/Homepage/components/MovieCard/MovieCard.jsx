import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h2>{movie.title}</h2>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
        <div className="overlay-info">
          <div>
          <FontAwesomeIcon
            icon={faImdb}
            style={{ color: `var(--color-yellow)` }}
          />
          <span>{movie?.vote_average}</span>
          </div>
          <div>
          <FontAwesomeIcon
            icon={faUsers}
            style={{ color: `var(--color-light-slate-gray)` }}
          />
          <span>{movie?.popularity}</span>
          </div>
          <span className="adult">{movie?.adult ? "over 18" : "under 18"}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
