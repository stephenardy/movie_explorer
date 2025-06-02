import { useEffect, useState } from "react";

import { API_KEY } from "../utils/env";

import Loader from "../components/Elements/Loader";
import NoSearch from "../components/Elements/NoSearchFound";
import NoWatchList from "../components/Elements/NoWatchList";
import ErrorMessage from "../components/Elements/ErrorMessage";

import Header from "../components/Fragments/Headers/Header";
import Search from "../components/Fragments/Headers/Search";
import Tab from "../components/Fragments/Tab/SwitchTab";
import MovieList from "../components/Fragments/Movies/MovieList";
import MovieDetail from "../components/Fragments/Movies/MovieDetail";
import WatchList from "../components/Fragments/WatchList/WatchlistList";
import WatchListDetail from "../components/Fragments/WatchList/WatchListDetail";
import AppLayout from "../components/Layouts/AppLayout";

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
    <AppLayout>
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
    </AppLayout>
  );
}

export default App;
