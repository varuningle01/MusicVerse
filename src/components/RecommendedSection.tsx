import React from "react";
import Card from "../child-components/Card";

const RecommendedSection = () => {
  const CardList = [
    {
      id: 1,
      musicName: "Naina",
      artistName: "Diljit Dosanjh",
    },
    {
      id: 2,
      musicName: "Kesariya",
      artistName: "Arjit Singh",
    },
    {
      id: 3,
      musicName: "Love Story",
      artistName: "Taylor Swift",
    },
    {
      id: 4,
      musicName: "Phir Mulaqaat",
      artistName: "Mitraz",
    },
    {
      id: 5,
      musicName: "Slingshot",
      artistName: "Zach Seabaug",
    },
  ];
  return (
    <div>
      <div className="flex flex-row items-center">
        <p className="text-xl flex-1">Recommended</p>
        <p className="text-xs text-purple-400">View All</p>
      </div>
      <div className="flex flex-row gap-x-3">
        {CardList.map((item, index) => {
          return <Card key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default RecommendedSection;
