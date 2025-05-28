import { useState } from "react";

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

export default Search;
