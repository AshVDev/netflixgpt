import React, { useEffect, useState } from "react";
import { API_OPT } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../utils/hooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {
  if (!movieId) return;
  useMovieTrailer(movieId);
  const trailerData = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerData) return;
  const { key } = trailerData;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video object-cover"
        src={`https://www.youtube.com/embed/${
          key || ""
        }?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </div>
  );
};

export default VideoBackGround;
