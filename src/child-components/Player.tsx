import React, { useEffect, useRef, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";
import { BsShuffle } from "react-icons/bs";
import {
  MdSkipPrevious,
  MdOutlinePlayCircleFilled,
  MdSkipNext,
  MdOutlineRepeatOne,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";
import { formatTime } from "../formatting";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 justify-around items-center">
      <audio ref={audioRef} src="../../public/Le Aaunga x Suniyan.mp3"></audio>
      <div className="mb-4 items-center flex gap-x-10 justify-evenly ms-20 md:col-span-2 md:ms-0">
        <div>
          <img
            src="https://placehold.jp/150x150.png"
            alt="Music"
            className="w-16 h-16 rounded-2xl object-cover"
          ></img>
        </div>
        <div>
          <p>Kesariya</p>
          <p className="text-sm text-gray-600">Arjit Singh</p>
        </div>
      </div>
      <div className="col-span-8 justify-center flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-8">
          <BsShuffle size={35} />
          <MdSkipPrevious size={35} />
          {isPlaying ? (
            <MdOutlinePauseCircleFilled
              size={45}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          ) : (
            <MdOutlinePlayCircleFilled
              size={45}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          )}
          <MdSkipNext size={35} />
          <MdOutlineRepeatOne size={35} />
        </div>
        <div className="w-full flex flex-row justify-evenly items-center gap-x-4">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
          <span>{formatTime(duration)}</span>
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
