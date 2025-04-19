import React from "react";
import MusicList from "../child-components/MusicList";

const TopChartThisWeekSection = () => {
  const itemList = [
    {
      category: "100 Top Hits",
      musicList: [
        {
          id: 1,
          musicName: "Naina",
          artistName: "Diljit Dosanjh",
          musicLength: "3:10",
        },
        {
          id: 2,
          musicName: "Kesariya",
          artistName: "Arjit Singh",
          musicLength: "3:10",
        },
        {
          id: 3,
          musicName: "Love Story",
          artistName: "Taylor Swift",
          musicLength: "3:10",
        },
        {
          id: 4,
          musicName: "Phir Mulaqaat",
          artistName: "Mitraz",
          musicLength: "3:10",
        },
        {
          id: 5,
          musicName: "Slingshot",
          artistName: "Zach Seabaug",
          musicLength: "3:10",
        },
      ],
    },
    {
      category: "100 Top Hits",
      musicList: [
        {
          id: 1,
          musicName: "Naina",
          artistName: "Diljit Dosanjh",
          musicLength: "3:10",
        },
        {
          id: 2,
          musicName: "Kesariya",
          artistName: "Arjit Singh",
          musicLength: "3:10",
        },
        {
          id: 3,
          musicName: "Love Story",
          artistName: "Taylor Swift",
          musicLength: "3:10",
        },
        {
          id: 4,
          musicName: "Phir Mulaqaat",
          artistName: "Mitraz",
          musicLength: "3:10",
        },
        {
          id: 5,
          musicName: "Slingshot",
          artistName: "Zach Seabaug",
          musicLength: "3:10",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex flex-row items-start gap-x-4">
        <p className="text-3xl flex-1">Top Chart This Week</p>
        <p className="text-xl text-purple-400">View All</p>
      </div>
      <div className="grid grid-cols-12">
        {itemList.map((item) => {
          return (
            <div className="col-span-6 p-2">
              <MusicList item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopChartThisWeekSection;
