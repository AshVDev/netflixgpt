import { useDispatch } from "react-redux";
import { API_OPT } from "../constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPT
    );
    const response = await data.json();
    dispatch(addTopRatedMovies(response.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
