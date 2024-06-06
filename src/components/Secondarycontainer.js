import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);

  return (
    <div className='bg-black'>
    <div className='-mt-28 text-white relative z-20' >
      <MovieList Title={"Now Playing"} Movies = {movies.nowPlayingMovies}/>
      <MovieList Title={"Popular"} Movies = {movies.popularMovies}/>
      <MovieList Title={"Top Rated"} Movies = {movies.topRatedMovies}/>
      <MovieList Title={"Upcoming"} Movies = {movies.upcomingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer;