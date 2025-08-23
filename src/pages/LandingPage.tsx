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
        <div className="flex flex-row items-center gap-x-4 px-4 pt-4">
          <SearchBar />
          <Avatar />
        </div>
        <div className="mx-4 overflow-auto scrollbar-hide scroll-smooth flex-1 appearance-none pt-0">
          <RecommendedSection />
          <TopChartThisWeekSection />
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
