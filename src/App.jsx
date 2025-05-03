import { useEffect, useState } from "react";

function Header() {
  return (
    <header className="text-center mt-16 mb-12">
      <h2 className="text-3xl font-bold text-blue-500">Movie Explorer</h2>
      <p className="text-sm text-gray-500">
        Discover, save, and rate your favorite films
      </p>
    </header>
  );
}

function Search({ onSetSearch, setTabWatchlist }) {
  const [tempSearch, setTempSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    onSetSearch(tempSearch);
  }

  return (
    <form
      onSubmit={(e) => handleSearch(e)}
      onClick={() => setTabWatchlist(false)}
      className="flex justify-center items-center"
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={tempSearch}
        onChange={(e) => setTempSearch(e.target.value)}
        className="w-64 p-2 bg-white placeholder-gray-500 rounded-tl-3xl rounded-bl-3xl outline-none"
      />

      <button className="w-12 py-2 rounded-tr-3xl rounded-br-3xl bg-blue-500 cursor-pointer">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" h-6 w-6 m-auto"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#fafafa"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </form>
  );
}

function Tab({ tabWatchlist, onActivateWatchlist }) {
  return (
    <div className="flex justify-center gap-12 sm:gap-24 md:gap-32 lg:gap-56 my-4">
      <div
        onClick={() => onActivateWatchlist(false)}
        className="cursor-pointer"
      >
        <div className="flex gap-2 mb-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              tabWatchlist ? "stroke-gray-500" : "stroke-blue-500"
            }`}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <p
            className={`${
              tabWatchlist ? "text-gray-500" : "text-blue-500"
            } text-sm`}
          >
            Search Results
          </p>
        </div>
        {!tabWatchlist && <div className="h-1 bg-blue-500 rounded" />}
      </div>

      <div onClick={() => onActivateWatchlist(true)} className="cursor-pointer">
        <div className="flex gap-2 mb-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ${
              !tabWatchlist ? "fill-gray-500" : "fill-blue-500"
            }`}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z"></path>{" "}
              <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z"></path>{" "}
            </g>
          </svg>
          <p
            className={`${
              !tabWatchlist ? "text-gray-500" : "text-blue-500"
            } text-sm`}
          >
            My Watchlist
          </p>
        </div>
        {tabWatchlist && <div className="h-1 bg-blue-500 rounded" />}
      </div>
    </div>
  );
}

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

function MovieDetail({
  selectedMovieID,
  onCloseMovieDetail,
  addWatchList,
  setAddWatchList,
}) {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Writer: writer,
    Actors: actors,
    Plot: plot,
    imdbRating,
  } = movieDetails;

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoadingDetail(true);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedMovieID}`
      );
      const data = await res.json();
      console.log(data);

      setMovieDetails(data);
      setIsLoadingDetail(false);
    }

    getMovieDetail();
  }, [selectedMovieID, setIsLoadingDetail]);

  function handleAddWatchList() {
    const newMovie = {
      imdbID: selectedMovieID,
      title,
      year,
      poster,
      runtime,
      genre,
      director,
      writer,
      actors,
      plot,
    };

    setAddWatchList((currMovieList) => [...currMovieList, newMovie]);
  }

  const inWatchList = addWatchList.some(
    (movie) => movie.imdbID === selectedMovieID
  );
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {isLoadingDetail ? (
        <Loader />
      ) : (
        <div className="relative w-3/4 max-w-xl py-2 px-4 bg-black shadow-lg">
          <button
            className="absolute right-1 z-10 w-8 h-8 flex justify-center items-center text-xl text-gray-500 hover:text-red-500  bg-white/50 rounded-full cursor-pointer"
            onClick={() => onCloseMovieDetail()}
          >
            &#x2715;
          </button>

          <img
            src={poster}
            alt={`${title}.png`}
            className="w-full h-32 rounded-lg object-cover mask-b-from-20% mask-b-to-80% text-white"
          />

          <div className="grid grid-cols-5">
            <img
              className="col-span-2 w-48 h-64 rounded-md object-cover text-white"
              src={poster}
              alt={`${title}.png`}
            />

            <div className="col-span-3">
              <h2 className="text-white text-xl font-extrabold mb-2">
                {title}
              </h2>

              <div className="flex flex-cols flex-wrap gap-2 text-sm">
                <p className="bg-blue-200 text-blue-500 px-2 rounded-xl">
                  {year}
                </p>
                <p className="bg-gray-200 text-gray-500 px-2 rounded-xl">
                  {runtime}
                </p>
                <p className="bg-violet-200 text-violet-500 px-2 rounded-xl">
                  {genre}
                </p>
                <p className="bg-yellow-200 text-yellow-500 px-2 rounded-xl">
                  {imdbRating}
                </p>
              </div>

              <div className="my-4">
                <h4 className="text-white font-bold mb-2">Overview</h4>
                <p className="text-sm text-gray-600">{plot}</p>
              </div>

              <div className="text-sm font-light text-gray-500 italic mb-4">
                <p>
                  <b>Directors:</b> {director}
                </p>
                <p>
                  <b>Writers:</b> {writer}
                </p>
                <p>
                  <b>Actors:</b> {actors}
                </p>
              </div>

              <button
                disabled={inWatchList}
                className="cursor-pointer w-fit place-items-center px-4 py-2 bg-blue-500 hover:bg-blue-800 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                onClick={() => handleAddWatchList()}
              >
                <div className="flex items-center text-white text-sm">
                  {!inWatchList && (
                    <svg
                      viewBox="0 0 24.00 24.00"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-white stroke-white"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
                          stroke="#fafafa"
                          stroke-width="1.2"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  )}
                  <span className="pl-2">
                    {!inWatchList ? "Add to Watchlist" : "Added to WatchList"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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

function NoSearch() {
  return (
    <div className="flex flex-col justify-center items-center my-16 mx-auto text-gray-500 text-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 fill-gray-500 stroke-gray-500"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2Z"
          ></path>{" "}
        </g>
      </svg>
      <p>Oops! No results yet</p>
      <p>Search for a movie by entering its name</p>
    </div>
  );
}

function WatchListDetail({ selectedMovieID, setOpenWatchListDetail }) {
  const [watchListDetails, setWatchListDetails] = useState({});
  const [isLoadingDetail, setIsLoadingDetail] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Genre: genre,
    Director: director,
    Writer: writer,
    Actors: actors,
    Plot: plot,
    imdbRating,
  } = watchListDetails;

  useEffect(() => {
    async function getMovieDetail() {
      setIsLoadingDetail(true);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedMovieID}`
      );
      const data = await res.json();
      console.log(data);

      setWatchListDetails(data);
      setIsLoadingDetail(false);
    }

    getMovieDetail();
  }, [selectedMovieID, setIsLoadingDetail]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {isLoadingDetail ? (
        <Loader />
      ) : (
        <div className="relative w-3/4 max-w-xl py-2 px-4 bg-black shadow-lg">
          <button
            className="absolute right-1 z-10 w-8 h-8 flex justify-center items-center text-xl text-gray-500 hover:text-red-500  bg-white/50 rounded-full cursor-pointer"
            onClick={() => setOpenWatchListDetail()}
          >
            &#x2715;
          </button>

          <img
            src={poster}
            alt={`${title}.png`}
            className="w-full h-32 rounded-lg object-cover mask-b-from-20% mask-b-to-80% text-white"
          />

          <div className="grid grid-cols-5">
            <img
              className="col-span-2 w-48 h-64 rounded-md object-cover text-white"
              src={poster}
              alt={`${title}.png`}
            />

            <div className="col-span-3">
              <h2 className="text-white text-xl font-extrabold mb-2">
                {title}
              </h2>

              <div className="flex flex-cols flex-wrap gap-2 text-sm">
                <p className="bg-blue-200 text-blue-500 px-2 rounded-xl">
                  {year}
                </p>
                <p className="bg-gray-200 text-gray-500 px-2 rounded-xl">
                  {runtime}
                </p>
                <p className="bg-violet-200 text-violet-500 px-2 rounded-xl">
                  {genre}
                </p>
                <p className="bg-yellow-200 text-yellow-500 px-2 rounded-xl">
                  {imdbRating}
                </p>
              </div>

              <div className="my-4">
                <h4 className="text-white font-bold mb-2">Overview</h4>
                <p className="text-sm text-gray-600">{plot}</p>
              </div>

              <div className="text-sm font-light text-gray-500 italic mb-4">
                <p>
                  <b>Directors:</b> {director}
                </p>
                <p>
                  <b>Writers:</b> {writer}
                </p>
                <p>
                  <b>Actors:</b> {actors}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NoWatchList() {
  return (
    <div className="flex flex-col justify-center items-center my-16 mx-auto text-gray-500 text-center">
      <svg
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 fill-gray-500 stroke-gray-500"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M5 6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.07989 19 6.2V21L12 16L5 21V6.2Z"
            stroke-width="1.2"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <p>Your Watchlist is empty</p>
      <p>Add movies from search results to your watchlist</p>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

function ErrorMessage({ error }) {
  return (
    <div className="w-full text-center py-4 bg-red-100 text-red-700 rounded-md my-4 shadow">
      <p className="font-medium">⚠️ {error}</p>
    </div>
  );
}

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [tabWatchlist, setTabWatchlist] = useState(false);
  const [openMovieDetail, setOpenMovieDetail] = useState(false);
  const [openWatchListDetail, setOpenWatchListDetail] = useState(false);

  const [search, setSearch] = useState("harry");
  const [movies, setMovies] = useState([]);
  const [selectedMovieID, setSelectedMovieID] = useState(null);
  const [addWatchList, setAddWatchList] = useState([]);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
        );
        if (!res.ok) throw new Error("response error");

        const data = await res.json();
        if (data.Response === "False") throw new Error(data.Error);

        setMovies(data.Search);
        setError("");
      } catch (error) {
        console.error("Error Fetching:", error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovie();
  }, [search]);

  function handleSelectMovieID(id) {
    setSelectedMovieID((currentID) => (currentID === id ? null : id));
    console.log(selectedMovieID);
    setOpenMovieDetail(true);
  }

  function onCloseMovieDetail() {
    setOpenMovieDetail(false);
    setSelectedMovieID(null);
  }

  function handleSelectWatchListID(id) {
    setSelectedMovieID((currentID) => (currentID === id ? null : id));
    console.log(selectedMovieID);
    setOpenWatchListDetail(true);
  }

  function onCloseWatchListDetail() {
    setOpenWatchListDetail(false);
    setSelectedMovieID(null);
  }

  function handleRemoveWatchItem(id) {
    setAddWatchList((watchList) =>
      watchList.filter((movie) => movie.imdbID !== id)
    );
    setSelectedMovieID(null);
  }

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Search onSetSearch={setSearch} setTabWatchlist={setTabWatchlist} />
      <Tab tabWatchlist={tabWatchlist} onActivateWatchlist={setTabWatchlist} />
      {!tabWatchlist ? (
        <>
          {isLoading && <Loader />}
          {error && error !== "Incorrect IMDb ID." && (
            <ErrorMessage error={error} />
          )}
          {error && error === "Incorrect IMDb ID." && <NoSearch />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovieID={handleSelectMovieID}
              openMovieDetail={openMovieDetail}
              onCloseMovieDetail={onCloseMovieDetail}
            />
          )}
        </>
      ) : addWatchList.length === 0 ? (
        <NoWatchList />
      ) : (
        <>
          <WatchList
            addWatchList={addWatchList}
            onSelectMovieID={handleSelectWatchListID}
            onRemoveWatchItem={handleRemoveWatchItem}
          />
        </>
      )}
      {openMovieDetail && (
        <MovieDetail
          selectedMovieID={selectedMovieID}
          onCloseMovieDetail={onCloseMovieDetail}
          addWatchList={addWatchList}
          setAddWatchList={setAddWatchList}
        />
      )}
      {openWatchListDetail && (
        <WatchListDetail
          selectedMovieID={selectedMovieID}
          setOpenWatchListDetail={onCloseWatchListDetail}
        />
      )}
    </div>
  );
}

export default App;
