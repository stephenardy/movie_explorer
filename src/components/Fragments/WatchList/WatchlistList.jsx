import WatchItem from "./WatchItem";

function WatchList({ addWatchList, onSelectMovieID, onRemoveWatchItem }) {
  return (
    <>
      <ul className="relative w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center z-0">
        {addWatchList?.map((movie) => (
          <WatchItem
            key={movie.imdbID}
            movie={movie}
            onSelectMovieID={onSelectMovieID}
            onRemoveWatchItem={onRemoveWatchItem}
          />
        ))}
      </ul>
    </>
  );
}

export default WatchList;
