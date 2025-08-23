import { useEffect, useRef } from "react";
import {
  IoHeartOutline,
  IoShuffleOutline,
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoRepeatOutline,
  IoPlaySharp,
  IoPauseSharp,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  pause,
  play,
  playNextTrack,
  playPreviousTrack,
  seek,
  setCurrentTime,
  setDuration,
  toggleRepeat,
  toggleShuffle,
} from "../features/player/playerSlice";
import { formatTime } from "../formatting";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { currentTrack, isPlaying, progress, duration, shuffle, repeat } =
    useSelector((state: any) => state.player);
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
    isPlaying ? audio.play() : audio.pause();
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

  const handleShuffle = () => dispatch(toggleShuffle());
  const handleRepeat = () => dispatch(toggleRepeat());
  const handleNext = () => dispatch(playNextTrack());
  const handlePrevious = () => dispatch(playPreviousTrack());

  return (
    <div className="w-full bg-transparent flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
      {/* Audio element */}
      <audio ref={audioRef} src={currentTrack?.url ?? ""}></audio>

      {/* Album Info */}
      <div className="flex items-center justify-center gap-3 md:gap-4 w-full md:w-auto">
        <img
          src={currentTrack?.cover ?? "https://placehold.jp/150x150.png"}
          alt="Music"
          className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover"
        />
        <div className="flex flex-col">
          <p className="text-sm md:text-base font-medium">
            {currentTrack?.title}
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            {currentTrack?.artist}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-1 items-center w-full">
        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-2">
          <IoShuffleOutline
            size={22}
            onClick={handleShuffle}
            className={`cursor-pointer transition-transform ${
              shuffle ? "text-black scale-110" : "text-gray-400"
            } hover:scale-110`}
          />
          <IoPlayBackSharp
            size={28}
            onClick={handlePrevious}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
          {isPlaying ? (
            <IoPauseSharp
              size={34}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          ) : (
            <IoPlaySharp
              size={34}
              onClick={togglePlay}
              className="cursor-pointer"
            />
          )}
          <IoPlayForwardSharp
            size={28}
            onClick={handleNext}
            className="cursor-pointer hover:scale-110 transition-transform"
          />
          <IoRepeatOutline
            size={22}
            onClick={handleRepeat}
            className={`cursor-pointer transition-transform ${
              repeat ? "text-black scale-110" : "text-gray-400"
            } hover:scale-110`}
          />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-2 w-full px-2 md:px-10">
          <span className="text-xs md:text-sm">{formatTime(progress)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={progress}
            onChange={handleSeek}
            className="flex-1 h-2 bg-gray-200 rounded-lg cursor-pointer accent-violet-500"
          />
          <span className="text-xs md:text-sm">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume & Like */}
      <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
        <IoHeartOutline size={22} className="cursor-pointer" />
        <IoVolumeHighOutline size={22} />
        <input
          type="range"
          className="w-full md:w-24 h-2 bg-gray-200 rounded-lg cursor-pointer accent-violet-500"
        />
      </div>
    </div>
  );
};

export default Player;
