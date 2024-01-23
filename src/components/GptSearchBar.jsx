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
      const RandomData = [
        "Se7en, The Silence of the Lambs, Memento, Gone Girl, The Departed",
        "Anchorman, Superbad, Dumb and Dumber, Bridesmaids, Step Brothers",
        "The Conjuring, Get Out, A Quiet Place, Insidious, Hereditary",
        "Saw, Hostel, The Human Centipede, Martyrs, Cannibal Holocaust",
        "Finding Nemo, The Lion King, Toy Story, Moana, Frozen",
        "Pulp Fiction, Inception, The Matrix, Fight Club, The Shawshank Redemption",
        "Naruto, Attack on Titan, One Piece, Death Note, My Hero Academia",
        "Iron Man, Black Panther, Avengers: Endgame, Spider-Man: Far From Home, Thor: Ragnarok",
        "The Dark Knight, Wonder Woman, Aquaman, Shazam!, Man of Steel",
        "Interstellar, The Grand Budapest Hotel, La La Land, The Revenant, The Social Network",
        "The Social Dilemma, The Imitation Game, The Matrix, Ex Machina, Her",
        "Blade Runner, Inception, The Matrix, Interstellar, Arrival",
        "The Notebook, Titanic, La La Land, Pride and Prejudice, Before Sunrise",
        "Akira, Perfect Blue, Ghost in the Shell, Paprika, Your Name",
        "The Dark Knight, Inception, Forrest Gump, Pulp Fiction, The Matrix",
        "Blade Runner 2049, Ghost in the Shell, The Matrix, Alita: Battle Angel, Akira",
      ];
      const randomIndex = Math.floor(Math.random() * RandomData.length);
      const staticResults = RandomData[randomIndex].split(",");

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
