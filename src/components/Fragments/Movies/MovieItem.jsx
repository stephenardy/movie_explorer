function MovieItem({ movie, onSelectMovieID }) {
  return (
    <li
      key={movie.imdbID}
      className="relative z-10 cursor-pointer w-48 m-4 rounded hover:scale-110 group text-white"
      onClick={() => onSelectMovieID(movie.imdbID)}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-64 w-full object-cover rounded-sm z-10"
      ></img>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 z-50 hidden group-hover:block bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap">
        {movie.Title}, {movie.Year}
      </div>
    </li>
  );
}

export default MovieItem;
