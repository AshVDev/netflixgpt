import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white bg-gradient-to-r from-black pt-[10%] px-6 md:px-24 w-screen aspect-video">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2 my-2 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg">
          <div className="flex justify-center items-center text-center  ">
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 96.155 96.155"
              xmlSpace="preserve"
              className="w-4 h-4 text-white"
              fill="black"
            >
              <g>
                <path
                  d="M20.972,95.594l57.605-45.951c0.951-0.76,0.951-2.367,0-3.127L20.968,0.56c-0.689-0.547-1.716-0.709-2.61-0.414
      c-0.186,0.061-0.33,0.129-0.436,0.186c-0.65,0.35-1.056,1.025-1.056,1.764v91.967c0,0.736,0.405,1.414,1.056,1.762
      c0.109,0.06,0.253,0.127,0.426,0.185C19.251,96.305,20.281,96.144,20.972,95.594z"
                />
              </g>
            </svg>
            Play
          </div>
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          <div className="flex justify-center items-center text-center">
            <svg
              height={48}
              viewBox="0 0 48 48"
              width={48}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path
                fill="white"
                d="M22 34h4v-12h-4v12zm2-30c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm0 36c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"
              />
            </svg>
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
