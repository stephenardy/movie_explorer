function WatchItem({ movie, onSelectMovieID, onRemoveWatchItem }) {
  return (
    <>
      <li
        key={movie.imdbID}
        className="relative z-10 cursor-pointer w-48 m-4 rounded hover:scale-110 group text-white"
      >
        <button
          title="remove from watchlist"
          className="absolute top-0 right-0 flex justify-center items-center w-5 h-5 bg-red-500 rounded-xl"
          onClick={() => onRemoveWatchItem(movie.imdbID)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 stroke-white font-bold"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Edit / Remove_Minus">
                {" "}
                <path
                  id="Vector"
                  d="M6 12H18"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-64 w-full object-cover rounded-sm z-10"
          onClick={() => onSelectMovieID(movie.imdbID)}
        ></img>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 z-50 hidden group-hover:block bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
          {movie.title}, {movie.year}
        </div>
      </li>
    </>
  );
}

export default WatchItem;
