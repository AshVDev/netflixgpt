import { useDispatch } from "react-redux";
import { API_OPT } from "../constants";
import { useEffect } from "react";
import { addPopularMovies } from "../movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPT
    );
    const response = await data.json();
    dispatch(addPopularMovies(response.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
