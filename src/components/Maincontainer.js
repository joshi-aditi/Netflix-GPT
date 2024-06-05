import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

//inside this we need to render the trailer video and it's title and all... will read the data from the store...

const Maincontainer = () => {
   const movies = useSelector((store)=>store.movies?.nowPlayingMovies);

   if(!movies) return;//BEFORE THE STORE EXECUTED THE NOW PLAYING MOVIE WILL BE NULL...
   const mainMovie = movies[0];

  return (
    <div>
        <VideoTitle title= {mainMovie.original_title} overview={mainMovie.overview}/>
        <VideoBackground movieId={mainMovie.id}/>
    </div>
  )
}

export default Maincontainer;