import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
  return (
    <div className='pl-8 py-3'>
    <div className='w-40 hover:opacity-70 hover:w-44'>
        <img className=' w-40 cursor-pointer hover:w-44' alt='Movie Card' src={POSTER_URL + movie.poster_path}/>
    </div>
    </div>
  )
}

export default MovieCard;