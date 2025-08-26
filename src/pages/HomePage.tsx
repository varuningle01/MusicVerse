import RecommendedSection from "../components/RecommendedSection";
import TopChartThisWeekSection from "../components/TopChartThisWeekSection";
import { TopArtist } from "../components/TopArtist";

export const HomePage = () => {
  return (
    <>
      <RecommendedSection />
      <TopChartThisWeekSection />
      <TopArtist />
    </>
  );
};
