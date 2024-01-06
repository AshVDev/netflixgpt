import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { useNavigate } from "react-router-dom";
import { API_OPT } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPT
    );

    const json = await data.json();

    return json.results;
  };

  const searchText = useRef(null);
  const handleGptSearch = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the Query ${searchText.current.value} . only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gya`;
    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const gptMovies = gptResults.choices?.message?.content.split(",");

      const dataPromise = gptMovies.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(dataPromise);
    } catch (error) {
      const staticResults =
        "Andaz Apna Apna, Chupke Chupke, Amar Akbar Anthony, Khatta Meetha, Angoor".split(
          ","
        );

      const dataPromise = staticResults.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(dataPromise);

      dispatch(
        addGptMovieResult({
          movieNames: staticResults,
          movieResult: tmdbResults,
        })
      );

      // navigate("/error");
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptPlaceholder}
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
