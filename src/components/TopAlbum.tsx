import ArtistCard from "../child-components/ArtistCard";
import { Swiper, SwiperSlide } from "swiper/react";

export interface Artist {
  id: number;
  name: string;
  image: string;
  genre?: string;
}

const TopAlbum = () => {
  const ArtistsList: Artist[] = [
    {
      id: 1,
      name: "Arijit Singh",
      image: "./assets/ArjitSingh.png",
      genre: "Bollywood",
    },
    {
      id: 2,
      name: "Taylor Swift",
      image: "./assets/TaylorSwift.png",
      genre: "Pop",
    },
    {
      id: 3,
      name: "The Weeknd",
      image: "./assets/Weekend.png",
      genre: "R&B",
    },
    {
      id: 4,
      name: "AP Dhillon",
      image: "./assets/ApDhillon.png",
      genre: "Punjabi",
    },
    {
      id: 6,
      name: "Billie Eilish",
      image: "./assets/BillieEllish.png",
      genre: "Alternative",
    },
    {
      id: 7,
      name: "Talwinder",
      image: "./assets/Talwinder.png",
      genre: "Punjabi Hiphop",
    },
    {
      id: 7,
      name: "Zachseabaug",
      image: "./assets/Zachseabaug.png",
      genre: "English Acoustic",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-row items-center">
        <p className="text-xl flex-1">Top Artists</p>
        <p className="text-xs text-purple-400 cursor-pointer">View All</p>
      </div>
      <div className="flex flex-row gap-x-3">
        <Swiper
          speed={1000}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            375: { slidesPerView: 1.75 },
            420: { slidesPerView: 2 },
            540: { slidesPerView: 2.5 },
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4.5 },
            1280: { slidesPerView: 5.5 },
            1440: { slidesPerView: 6.5 },
            2560: { slidesPerView: 12 },
          }}
          className="mySwiper"
        >
          {ArtistsList.map((artist) => (
            <SwiperSlide key={artist.id}>
              <ArtistCard {...artist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopAlbum;
