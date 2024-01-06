import { useDispatch, useSelector } from "react-redux";
import { API_OPT } from "../constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../movieSlice";

const useTrendingMovies = () => {
  const moviesData = useSelector((store) => store.movies.trendingMovies);
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPT
    );
    const response = await data.json();
    dispatch(addTrendingMovies(response.results));
  };
  useEffect(() => {
    !moviesData && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
