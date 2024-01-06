import { useDispatch, useSelector } from "react-redux";
import { API_OPT } from "../constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../movieSlice";

const useNowPlayingMovies = () => {
  const moviesData = useSelector((store) => store.movies.nowPlayingMovies);
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPT
    );
    const response = await data.json();
    dispatch(addNowPlayingMovies(response.results));
  };
  useEffect(() => {
    !moviesData && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
