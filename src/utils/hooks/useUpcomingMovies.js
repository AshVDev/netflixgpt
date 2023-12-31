import { useDispatch, useSelector } from "react-redux";
import { API_OPT } from "../constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../movieSlice";

const useUpcomingMovies = () => {
  const moviesData = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPT
    );
    const response = await data.json();
    dispatch(addUpcomingMovies(response.results));
  };
  useEffect(() => {
    !moviesData && getMovies();
  }, []);
};

export default useUpcomingMovies;
