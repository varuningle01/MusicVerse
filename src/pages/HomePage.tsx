import React from "react";
import RecommendedSection from "../components/RecommendedSection";
import TopChartThisWeekSection from "../components/TopChartThisWeekSection";
import TopAlbum from "../components/TopAlbum";

export const HomePage = () => {
  return (
    <>
      <RecommendedSection />
      <TopChartThisWeekSection />
      <TopAlbum />
    </>
  );
};
