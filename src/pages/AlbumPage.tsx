import Card from "../child-components/Card";
import { SongsList } from "../data/Songs";

export const AlbumPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-row items-center">
        <p className="text-2xl flex-1">Albums</p>
        <p className="text-xs text-purple-400">View All</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {SongsList.map((album) => (
          <Card {...album} />
        ))}
      </div>
    </div>
  );
};
