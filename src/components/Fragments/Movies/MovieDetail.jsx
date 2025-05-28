import { useEffect, useState } from "react";
import { API_KEY } from "../../../utils/env";
import Loader from "../../Elements/Loader";

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

export default MovieDetail;
