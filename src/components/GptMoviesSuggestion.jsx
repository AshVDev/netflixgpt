import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const { movieResult, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80 ">
      <div>
        {movieNames.map((movieName, ind) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResult[ind]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
