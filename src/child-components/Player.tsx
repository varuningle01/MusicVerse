import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";

const Player = () => {
  return (
    <div className="grid grid-cols-12 gap-x-4 justify-around p-4">
      <div className="col-span-2 items-center flex">
        <img
          src="https://via.placeholder.com/256x160"
          alt="Music"
          className="w-full h-full"
        ></img>
        <div>
          Kesariya
          <p className="text-sm text-gray-600">Arjit</p>
        </div>
      </div>
      <div className="col-span-8"></div>
      <div className="col-span-2 flex gap-x-4 items-center">
        <IoHeartOutline size={20} />
        <CiVolumeHigh size={20} />
        <input type="range" />
      </div>
    </div>
  );
};

export default Player;
