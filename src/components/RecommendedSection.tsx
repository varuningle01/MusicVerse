import React from "react";
import Card from "../child-components/Card";
import { SongsList } from "../data/Songs";

const RecommendedSection = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-row items-center">
        <p className="text-xl flex-1">Recommended</p>
        <p className="text-xs text-purple-400">View All</p>
      </div>
      <div className="flex flex-row gap-x-3">
        {SongsList.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedSection;
