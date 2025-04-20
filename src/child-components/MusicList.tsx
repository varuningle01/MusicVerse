import React from "react";

type musicListProps = {
  id: number;
  musicName: string;
  artistName: string;
  musicLength: string;
};

type CategoryMusicListProps = {
  item: {
    category: string;
    musicList: musicListProps[];
  };
};

const MusicList = ({ item }: CategoryMusicListProps) => {
  return (
    <div className="grid grid-cols-12 border-2 border-green-400 gap-x-10">
      <div className="relative w-50 rounded-lg overflow-hidden col-span-5">
        <img
          src="https://placehold.jp/150x150.png"
          alt="Music"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-end justify-center">
          <p className="text-black text-xl font-semibold mb-10">
            {item.category}
          </p>
        </div>
      </div>
      <div className="col-span-7">
        {item.musicList.map((item) => {
          return (
            <div className="flex flex-row items-center">
              <div className="text-2xl p-3">{item.id}</div>
              <div>
                <span className="text-sm mt-3">{item.musicName}</span>
                <p className="flex text-sm text-gray-600 gap-x-2 text-xs text-gray-400">
                  <span> {item.artistName}</span>
                  <span> {item.musicLength}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MusicList;
