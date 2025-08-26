import React from "react";
import RecommendedSection from "../components/RecommendedSection";
import TopChartThisWeekSection from "../components/TopChartThisWeekSection";
import TopAlbum from "../components/TopAlbum";

const Home = () => {
  return (
    <>
      <RecommendedSection />
      <TopChartThisWeekSection />
      <TopAlbum />
    </>
  );
};

export default Home;
