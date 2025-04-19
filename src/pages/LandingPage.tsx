import React from "react";
import SearchBar from "../child-components/SearchBar";
import SidePanel from "../components/SidePanel";
import Avatar from "../child-components/Avatar";
import RecommendedSection from "../components/RecommendedSection";
import TopChartThisWeekSection from "../components/TopChartThisWeekSection";
import Player from "../child-components/Player";

const LandingPage = () => {
  return (
    <div className="min-h-screen mx-auto border-2 grid grid-cols-12">
      <div className="col-span-2 border-2 border-purple-500 p-4">
        <SidePanel />
      </div>
      <div className="col-span-10 border-2 p-4 ">
        <div className="flex flex-row items-start gap-x-4">
          <SearchBar />
          <Avatar />
        </div>
        <div className="border-2 border-purple-400 p-2">
          <RecommendedSection />
          <TopChartThisWeekSection />
          <Player />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
