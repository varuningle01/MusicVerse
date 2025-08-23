import { createSlice, current } from "@reduxjs/toolkit";

export type Track = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  url: string;
  cover?: string;
};

export type PlayerState = {
  queue: [];
  currentIndex: number;
  shuffle: boolean;
  repeat: boolean;
  isPlaying: boolean;
  currentTrack: Track | null;
  progress: number; // in seconds
  duration: number;
  volume: number; // 0 to 1
  isMuted: boolean;
};

const initialState: PlayerState = {
  queue: [],
  currentIndex: 0,
  shuffle: false,
  repeat: false,
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
    toggleShuffle: (state) => {
      state.shuffle = !state.shuffle;
    },
    toggleRepeat: (state) => {
      state.repeat = !state.repeat;
    },
    playNextTrack: (state) => {
      if (state.queue.length === 0) return;
      if (state.shuffle) {
        state.currentIndex = Math.floor(Math.random() * state.queue.length);
      } else {
        state.currentIndex = (state.currentIndex + 1) % state.queue.length;
      }
      state.currentTrack = state.queue[state.currentIndex];
    },
    playPreviousTrack: (state) => {
      if (state.queue.length === 0) return;
      state.currentIndex =
        (state.currentIndex - 1 + state.queue.length) % state.queue.length;
      state.currentTrack = state.queue[state.currentIndex];
    },
    setQueue: (state, action) => {
      console.log("payload", action.payload);
      state.queue = action.payload;
      state.currentIndex = action.payload.startIndex || 0;
      state.currentTrack = state.queue[state.currentIndex];
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
  toggleRepeat,
  toggleShuffle,
  playNextTrack,
  playPreviousTrack,
  setQueue,
} = playerSlice.actions;

export default playerSlice.reducer;
