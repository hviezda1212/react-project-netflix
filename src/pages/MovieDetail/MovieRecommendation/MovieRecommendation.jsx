import React from 'react';
import '../MovieRecommendation/MovieRecommendation.style.css';
import { useMovieRecommend } from '../../../hooks/useMovieRecommend';
import { useParams } from 'react-router-dom';
import MovieCard from '../../../common/MovieCard/MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../../../constants/responsive';
import isLoadingSpinner from '../../../common/Spinner/LoadingSpinner';

const MovieRecommendation = () => {
    let params = useParams();
    const { data, isLoading, isError, error } = useMovieRecommend(params);

    if (isLoading) {
        return <div>{isLoadingSpinner()}</div>
    }
    if (isError) {
        return <div>{error.message}</div>
    }

    let movies = data?.results;

    return (
        <div className="movie-recommendation-container">
            <h4 style={{ color: 'white' }}>관련 추천 영화</h4>
            {movies && movies.length > 0 ? (
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    containerClass="carousel-container"
                    itemClass="movie-card"
                >
                    {movies.map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))}
                </Carousel>
            ) : (
                <div className="NotFound" style={{ color: 'white' }}>추천 영화가 존재하지 않습니다.</div>
            )}
        </div>
    );
}

export default MovieRecommendation;