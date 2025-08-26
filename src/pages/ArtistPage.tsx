import ArtistCard from "../child-components/ArtistCard";
import { ArtistsList } from "../data/ArtistsList";

export const ArtistPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-row items-center">
        <p className="text-2xl flex-1">Artists</p>
        <p className="text-xs text-purple-400">View All</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {ArtistsList.map((artist, index) => (
          <div key={index} className="text-center cursor-pointer group">
            <ArtistCard {...artist} />
            <p className="text-white font-medium">{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
