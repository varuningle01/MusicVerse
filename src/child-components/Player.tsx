import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";
import { BsShuffle } from "react-icons/bs";
import {
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdSkipNext,
  MdOutlineRepeatOne,
} from "react-icons/md";

const Player = () => {
  return (
    <div className="grid grid-cols-12 gap-x-4 justify-around p-4 items-center">
      <div className="col-span-2 items-center flex gap-x-6">
        <img
          src="https://placehold.jp/150x150.png"
          alt="Music"
          className="w-16 h-16 rounded-full object-cover"
        ></img>
        <div>
          Kesariya
          <p className="text-sm text-gray-600">Arjit Singh</p>
        </div>
      </div>
      <div className="col-span-8 justify-center flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-8">
          <BsShuffle size={35} />
          <MdSkipPrevious size={35} />
          <MdOutlinePlayCircleFilled size={35} />
          <MdSkipNext size={35} />
          <MdOutlineRepeatOne size={35} />
        </div>
        <div className="w-2xl flex flex-row justify-evenly items-center gap-x-4">
          <span>00:00</span>
          <input
            type="range"
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <span> 03:10</span>
        </div>
      </div>
      <div className="col-span-2 flex gap-x-4 items-center">
        <IoHeartOutline size={35} />
        <CiVolumeHigh size={35} />
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Player;
