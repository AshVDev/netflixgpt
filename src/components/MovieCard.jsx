import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="relative group w-48 pr-4 ">
      <img
        className="w-full h-full transition-transform transform group-hover:scale-110 "
        src={`${IMG_CDN + posterPath}`}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
