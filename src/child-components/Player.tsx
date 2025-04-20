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
import { useDispatch, useSelector } from "react-redux";
import {
  pause,
  play,
  seek,
  setCurrentTime,
  setDuration,
} from "../features/player/PlayerSlice";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentTrack, isPlaying, progress, duration } = useSelector(
    (state: any) => state.player
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => dispatch(setCurrentTime(audio.currentTime));
    const setMeta = () => dispatch(setDuration(audio.duration));
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
    };
  }, [currentTrack, isPlaying]);

  useEffect(() => {
    if (currentTrack && audioRef.current) {
      audioRef.current.play();
      dispatch(play());
    }
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    isPlaying ? dispatch(pause()) : dispatch(play());
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      dispatch(seek(time));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-4 justify-around items-center">
      <audio ref={audioRef} src={currentTrack?.url ?? ""}></audio>
      <div className="mb-4 items-center flex gap-x-10 justify-evenly ms-20 md:col-span-2 md:ms-0">
        <div>
          <img
            src={currentTrack?.cover ?? "https://placehold.jp/150x150.png"}
            alt="Music"
            className="w-16 h-16 rounded-2xl object-cover"
          ></img>
        </div>
        <div>
          <p className="text-sm mt-3">{currentTrack?.title}</p>
          <p className="text-xs text-gray-400">{currentTrack?.artist}</p>
        </div>
      </div>
      <div className="col-span-8 justify-center flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-8">
          <BsShuffle size={25} />
          <MdSkipPrevious size={30} />
          {isPlaying ? (
            <MdOutlinePauseCircleFilled
              size={40}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          ) : (
            <MdOutlinePlayCircleFilled
              size={40}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          )}
          <MdSkipNext size={30} />
          <MdOutlineRepeatOne size={30} />
        </div>
        <div className="w-full flex flex-row justify-evenly items-center gap-x-4">
          <span>{formatTime(progress)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={progress}
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
