import React from "react";
import SearchBar from "../child-components/SearchBar";
import SidePanel from "../components/SidePanel";
import Avatar from "../child-components/Avatar";
import RecommendedSection from "../components/RecommendedSection";
import TopChartThisWeekSection from "../components/TopChartThisWeekSection";
import Player from "../child-components/Player";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const { currentTrack } = useSelector((state: any) => state.player);
  return (
    <div className="h-screen mx-auto grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-2 h-screen shadow-lg/40 hidden md:block p-4 sticky top-0">
        <SidePanel />
      </div>
      <div className="md:col-span-10 col-span-1 flex flex-col h-screen">
        <div className="flex flex-row items-center gap-x-4 mx-4 mt-4">
          <SearchBar />
          <Avatar />
        </div>
        <div className="p-2 overflow-auto scrollbar-hide scroll-smooth flex-1 appearance-none m-4 mt-0">
          <RecommendedSection />
          <TopChartThisWeekSection />
        </div>
        {currentTrack && (
          <div className="sticky bottom-0 z-50 bg-white shadow-md p-3">
            <Player />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
