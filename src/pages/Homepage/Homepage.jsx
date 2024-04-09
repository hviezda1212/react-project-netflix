import React from 'react'
import Banner from "./components/Banner/Banner"
import PopularMovieSlide from './components/MovieSlide/PopularMovieSlide'
import TopRatedMovieSlide from './components/MovieSlide/TopRatedMovieSlide'
import UpcomingMovieSlide from './components/MovieSlide/UpcomingMovieSlide'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <TopRatedMovieSlide/>
      <UpcomingMovieSlide/>
    </div>
  )
}

export default Homepage
