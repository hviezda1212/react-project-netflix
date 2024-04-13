import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { Row, Col, Container, Badge, Alert } from "react-bootstrap";
import "../MovieDetail/MovieDetailPage.style.css";
import MovieTab from "./MovieTabs/MovieTab";
import LoadingSpinner from "../../common/Spinner/LoadingSpinner";

const MovieDetail = () => {
  let params = useParams();

  const { data, isLoading, isError, error } = useMovieDetails(params);
  const posterPath = data?.poster_path;
  const backPoster = data?.backdrop_path;

  const poster_URL = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`;
  const backPoster_URL = `https://image.tmdb.org/t/p/original${backPoster}`;

  if (isLoading) {
    return <div>{LoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <>
      <div
        className="MainPoster"
        style={{ backgroundImage: `url(${backPoster_URL})` }}
      >
        <Container className="Container">
          <div className="InfoContainer">
            <Row>
              <Col sm={4} className="MovieInfo">
                <div
                  className="MovieDetailInfoImage"
                  style={{ backgroundImage: `url(${poster_URL})` }}
                ></div>
              </Col>
              <Col sm={8} className="MovieInfoContainer">
                <h1>{data?.title}</h1>
                <p>{data?.overview}</p>
                <p className="OverviewContainer"></p>
                <p>
                  {data?.genres.map((item, index) => (
                    <Badge className="badge" bg="danger" key={index}>
                      {item?.name}
                    </Badge>
                  ))}
                </p>
                <p> Age : {data?.adult ? "over 18" : "under 18"}</p>
                <p> Release Date : {data?.release_date}</p>
                <p> Run Time : {data?.runtime}minutes</p>
                <p> Score : {data?.vote_average}</p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <MovieTab />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MovieDetail;
