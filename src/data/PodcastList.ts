import { nanoid } from "@reduxjs/toolkit";

export const PodcastList = [
  {
    id: nanoid(),
    title: "Tech Talk Daily",
    artist: "John Smith",
    cover: "./assets/tech-podcast-microphone.png",
  },
  {
    id: nanoid(),
    title: "Music Matters",
    artist: "Sarah Johnson",
    cover: "./assets/music-podcast-headphones.png",
  },
  {
    id: nanoid(),
    title: "Creative Minds",
    artist: "Mike Wilson",
    cover: "./assets/creative-podcast-art.png",
  },
  {
    id: nanoid(),
    title: "Business Insights",
    artist: "Lisa Brown",
    cover: "./assets/business-podcast-office.png",
  },
];
