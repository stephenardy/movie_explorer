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

export default NoWatchList;
