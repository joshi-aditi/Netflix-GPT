import React from "react";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = (movieId) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full aspect-video"
        src={
          `https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=${trailer?.key}`
          //?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=${trailer?.key}
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
