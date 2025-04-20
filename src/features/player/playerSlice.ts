import { createSlice } from "@reduxjs/toolkit";

export type Track = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  url: string;
  cover?: string;
};

export type PlayerState = {
  isPlaying: boolean;
  currentTrack: Track | null;
  progress: number; // in seconds
  duration: number;
  volume: number; // 0 to 1
  isMuted: boolean;
};

const initialState: PlayerState = {
  isPlaying: false,
  currentTrack: null,
  progress: 0,
  duration: 0,
  volume: 0.8,
  isMuted: false,
};

const playerSlice = createSlice({
  name: "Player",
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
      state.isPlaying = true;
      state.progress = 0;
    },
    seek: (state, action) => {
      state.progress = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    toggleMute: (state) => {
      state.isMuted = true;
    },
    resetPlayer: (state) => {
      state.isPlaying = false;
      state.currentTrack = null;
      state.progress = 0;
      state.duration = 0;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.progress = action.payload;
    },
  },
});

export const {
  play,
  pause,
  setCurrentTrack,
  seek,
  setVolume,
  toggleMute,
  resetPlayer,
  setDuration,
  setCurrentTime,
} = playerSlice.actions;

export default playerSlice.reducer;
