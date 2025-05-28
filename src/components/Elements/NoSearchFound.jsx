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

export default NoSearch;
