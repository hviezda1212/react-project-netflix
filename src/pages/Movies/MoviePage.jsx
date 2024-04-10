import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import { Col, Row, Container, Button, Badge, Alert } from "react-bootstrap";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import MovieCard from "../../common/MovieCard/MovieCard";
import LoadingSpinner from "../../common/Spinner/LoadingSpinner";
import "../Movies/MoviePage.style.css";

const PAGE_SIZE = 10;
const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const [sortedData, setSortedData] = useState(null);
  const [sortedRankData, setSortedRankData] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const keyword = query.get("q");
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });

  const { data: genre } = useMovieGenreQuery();

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleSortPopularRank = () => {
    const sortedMovies = [...data.results].sort(
      (a, b) => b.popularity - a.popularity
    );
    setSortedData(sortedMovies);
    setSortedRankData(null);
  };

  const handleSortRecentRank = () => {
    const sortedRankMovies = [...data.results].sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    );
    setSortedRankData(sortedRankMovies);
    setSortedData(null);
  };

  useEffect(() => {
    setPage(1);
    setSortedData(null);
    setSortedRankData(null);
  }, [keyword]);

  useEffect(() => {
    setSortedData(null);
    setSortedRankData(null);
  }, [page]);

  const ReadingGenre = (event) => {
    const selectedGenreName = event.target.innerText;
    const selectedGenreId = genre.find(
      (item) => item?.name === selectedGenreName
    )?.id;

    if (selectedGenreId) {
      const filteredMovies = data?.results.filter((movie) =>
        movie?.genre_ids.includes(selectedGenreId)
      );
      setSelectedGenre(filteredMovies);
      setSortedData(null);
      setSortedRankData(null);
      setPage(1);
    }
  };

  if (isLoading) {
    return <div>{LoadingSpinner()}</div>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const displayData =
    sortedData || sortedRankData || selectedGenre || data.results;

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <Container className="SortButton">
            <Button variant="danger" onClick={handleSortPopularRank}>
              인기순
            </Button>
            <Button variant="danger" onClick={handleSortRecentRank}>
              최신순
            </Button>
            <Container className="MovieGenreContainer">
              <Col lg={8} xs={10}>
                {genre?.map((item) => (
                  <Badge
                    className="GenreBadge"
                    key={item?.id}
                    bg="danger"
                    onClick={(event) => ReadingGenre(event)}
                  >
                    {item?.name}{" "}
                  </Badge>
                ))}
              </Col>
            </Container>
          </Container>
        </Col>
        <Col lg={8} xs={10} className="MovieBox">
          {displayData.length === 0 && (
            <h4 className="NoGenre" variant="info">
              선택한 장르의 영화가 존재하지 않습니다.
            </h4>
          )}
          <Row>
            {displayData.map((movie, index) => (
              <Col key={index} lg={4} xs={8}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <div className="paginationContainer">
          <ReactPaginate

            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={data?.total_pages}
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link bg-dark border-dark text-white"
            previousClassName="page-item"
            previousLinkClassName="page-link bg-dark border-dark text-white"
            nextClassName="page-item"
            nextLinkClassName="page-link bg-dark border-dark text-white"
            breakLabel="..."
            breakClassName="page-item "
            breakLinkClassName="page-link bg-dark border-dark text-white"
            containerClassName="pagination d-flex justify-content-center pt-5"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1}
          />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
