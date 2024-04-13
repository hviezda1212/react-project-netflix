import React from "react";
import "../MovieRecommendation/MovieRecommendation.style.css";
import { useMovieRecommend } from "../../../hooks/useMovieRecommend";
import { useParams } from "react-router-dom";
import MovieCard from "../../../common/MovieCard/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../../../constants/responsive";
import isLoadingSpinner from "../../../common/Spinner/LoadingSpinner";

const MovieRecommendation = () => {
  let params = useParams();
  const { data, isLoading, isError, error } = useMovieRecommend(params);

  if (isLoading) {
    return <div>{isLoadingSpinner()}</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  let movies = data?.results;

  return (
    <div className="movie-recommendation-container">
      <h4 style={{ color: "white" }}>Recommended movies</h4>
      {movies && movies.length > 0 ? (
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={responsive}
        >
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      ) : (
        <div className="NotFound" style={{ color: "white" }}>
          There are no recommended movies.
        </div>
      )}
    </div>
  );
};

export default MovieRecommendation;
