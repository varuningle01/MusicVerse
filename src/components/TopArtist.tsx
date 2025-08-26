import ArtistCard from "../child-components/ArtistCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArtistsList } from "../data/ArtistsList";

export interface Artist {
  id: number;
  name: string;
  image: string;
  genre?: string;
}

export const TopArtist = () => {
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
