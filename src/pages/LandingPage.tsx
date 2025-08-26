import { useMemo } from "react";
import SearchBar from "../child-components/SearchBar";
import SidePanel from "../components/SidePanel";
import Avatar from "../child-components/Avatar";
import Player from "../child-components/Player";
import { useSelector } from "react-redux";
import { TAB_LIST } from "../common/devConstants";
import {
  AccountPage,
  AlbumPage,
  ArtistPage,
  FavouritePage,
  HomePage,
  LoginPage,
  PlaylistPage,
  PodcastPage,
  RecentPage,
  SettingsPage,
} from ".";

const LandingPage = () => {
  const { currentTrack } = useSelector((state: any) => state.player);
  const { currentTab } = useSelector((state: any) => state.dashboard);
  console.log(currentTab);

  const TabConfig: Record<string, React.FC> = {
    [TAB_LIST.HOME]: HomePage,
    [TAB_LIST.ARTIST]: ArtistPage,
    [TAB_LIST.ALBUM]: AlbumPage,
    [TAB_LIST.PODCAST]: PodcastPage,
    [TAB_LIST.RECENT]: RecentPage,
    [TAB_LIST.FAVOURITE]: FavouritePage,
    [TAB_LIST.PLAYLIST]: PlaylistPage,
    [TAB_LIST.SETTINGS]: SettingsPage,
    [TAB_LIST.ACCOUNT]: AccountPage,
  };

  const CurrentComponent = useMemo(() => TabConfig[currentTab], [currentTab]);

  return currentTab === TAB_LIST.LOGOUT ? (
    <LoginPage />
  ) : (
    <div className="h-screen mx-auto grid grid-cols-1 md:grid-cols-12">
      <div
        className={
          currentTrack
            ? `overflow-auto no-scrollbar scroll-smooth md:col-span-2 h-screen shadow-lg/40 hidden md:block p-4 sticky top-0 pb-30`
            : `md:col-span-2 h-screen shadow-lg/40 hidden md:block p-4 sticky top-0`
        }
      >
        <SidePanel />
      </div>
      <div className="md:col-span-10 col-span-1 flex flex-col h-screen">
        <div className="flex flex-row items-center gap-x-4 px-4 pt-4 pb-2">
          <SearchBar />
          <Avatar />
        </div>
        <div
          className={
            currentTrack
              ? `mx-4 overflow-auto no-scrollbar scroll-smooth flex-1 appearance-none pt-0 pb-30`
              : `mx-4 overflow-auto no-scrollbar scroll-smooth flex-1 appearance-none pt-0`
          }
        >
          <CurrentComponent />
        </div>
        {currentTrack && (
          <div
            className="max-w-full box-border left-0 right-0 z-50 bottom-0 fixed flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 
                bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 rounded-xl p-3"
          >
            <Player />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
