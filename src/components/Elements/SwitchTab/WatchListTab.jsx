function WatchListTab({ tabWatchlist, onActivateWatchlist }) {
  return (
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
  );
}

export default WatchListTab;
