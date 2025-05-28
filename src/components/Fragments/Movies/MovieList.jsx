import MovieItem from "./MovieItem";

function MovieList({ movies, onSelectMovieID }) {
  return (
    <ul className="relative w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center z-0">
      {movies?.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          onSelectMovieID={onSelectMovieID}
        />
      ))}
    </ul>
  );
}

export default MovieList;
