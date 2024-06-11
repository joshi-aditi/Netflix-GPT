import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Title, Movies}) => {
  return (
    <div>
    <h1 className='text-2xl pl-8 py-3 font-semibold font-serif'>{Title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex '>
            {Movies?.map((movie)=><MovieCard key={movie.id} movie = {movie}/>)}            
        </div>
    </div>
    </div>
  )
}

export default MovieList;