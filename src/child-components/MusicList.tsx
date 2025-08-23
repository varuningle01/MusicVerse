import MusicListItem from "./MusicListItem";

export type musicListProps = {
  id: number;
  musicName: string;
  artistName: string;
  musicLength: string;
};

type CategoryMusicListProps = {
  item: {
    category: string;
    categoryCover: string;
    musicList: musicListProps[];
  };
};

const MusicList = ({ item }: CategoryMusicListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-10 p-4 rounded-lg">
      {/* Image Section */}
      <div className="relative rounded-lg overflow-hidden md:col-span-5">
        <img
          src={item.categoryCover}
          alt="Music"
          className="w-full h-48 md:h-64 object-cover"
        />
      </div>

      {/* List Section */}
      <div className="md:col-span-7 flex flex-col justify-center gap-y-3">
        {item.musicList.map((music) => (
          <MusicListItem key={music.id} {...music} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
