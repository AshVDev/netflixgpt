import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { lang } from "../utils/languageConstants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const langkey = useSelector((store) => store.config.lang);
  if (!movies) return;
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList
          title={lang[langkey].nowPlaying}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={lang[langkey].trending}
          movies={movies.trendingMovies}
        />
        <MovieList
          title={lang[langkey].popular}
          movies={movies.popularMovies}
        />
        <MovieList
          title={lang[langkey].upcoming}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={lang[langkey].topRated}
          movies={movies.topRatedMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
