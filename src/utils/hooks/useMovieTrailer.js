import React, { useEffect } from "react";
import { API_OPT } from "../constants";
import { addTrailerVideo } from "../movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const moviesData = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPT
    );
    const json = await data.json();
    const filteredData = json.results.filter((e) => e.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !moviesData && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
