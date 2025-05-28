import SearchTab from "../../Elements/SwitchTab/SearchTab";
import WatchListTab from "../../Elements/SwitchTab/WatchListTab";

function Tab({ tabWatchlist, onActivateWatchlist }) {
  return (
    <div className="flex justify-center gap-12 sm:gap-24 md:gap-32 lg:gap-56 my-4">
      <SearchTab
        tabWatchlist={tabWatchlist}
        onActivateWatchlist={onActivateWatchlist}
      />
      <WatchListTab
        tabWatchlist={tabWatchlist}
        onActivateWatchlist={onActivateWatchlist}
      />
    </div>
  );
}

export default Tab;
