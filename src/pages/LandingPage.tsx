import { useMemo, useState } from "react";
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
  const [isSideOpen, setIsSideOpen] = useState(false);

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

  if (currentTab === TAB_LIST.LOGOUT) return <LoginPage />;

  return (
    <div className="h-screen mx-auto grid grid-cols-1 md:grid-cols-12">
      {/* Desktop sidebar (unchanged layout) */}
      <div
        className={
          currentTrack
            ? `overflow-auto no-scrollbar scroll-smooth md:col-span-2 h-screen shadow-lg/40 hidden md:block p-4 sticky top-0 pb-30`
            : `overflow-auto no-scrollbar scroll-smooth md:col-span-2 h-screen shadow-lg/40 hidden md:block p-4 sticky top-0`
        }
      >
        <SidePanel />
      </div>
      {/* Mobile drawer sidebar */}
      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-white/20",
          "transition-transform duration-300 ease-in-out md:hidden",
          isSideOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        aria-hidden={!isSideOpen}
      >
        <div className="h-full overflow-auto no-scrollbar p-4">
          <SidePanel />
        </div>

        {/* Drawer close hit-area on the rest of the screen */}
        <button
          aria-label="Close side panel"
          className="absolute top-3 right-3 rounded-md p-2 text-cyan-500"
          onClick={() => setIsSideOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* Scrim behind drawer */}
      {isSideOpen && (
        <button
          aria-label="Close side panel overlay"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsSideOpen(false)}
        />
      )}

      <div className="md:col-span-10 col-span-1 flex flex-col h-screen">
        <div className="flex flex-row items-center gap-x-4 px-4 pt-4 pb-2">
          {/* NEW: Mobile sidepanel toggle button */}
          <button
            aria-label="Open side panel"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2
             text-white bg-gradient-to-r from-cyan-500 to-violet-500
             focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setIsSideOpen(true)}
          >
            {/* Simple hamburger icon */}
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
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
            className="max-w-full box-border left-0 right-0 z-30 bottom-0 fixed flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 
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
