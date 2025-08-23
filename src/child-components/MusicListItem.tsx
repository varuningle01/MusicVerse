import { musicListProps } from "./MusicList";
import { FaPlay } from "react-icons/fa";

const MusicListItem = ({
  id,
  musicName,
  artistName,
  musicLength,
}: musicListProps) => {
  return (
    <div className="flex flex-row items-center group cursor-pointer">
      <div className="text-2xl p-3 relative w-10 h-10 flex items-center justify-center">
        <span className="group-hover:hidden">{id}</span>
        <FaPlay className="hidden group-hover:block text-violet-500 text-lg" />
      </div>

      <div>
        <span className="text-sm mt-3">{musicName}</span>
        <p className="flex gap-x-2 text-xs text-gray-400">
          <span>{artistName}</span>
          <span>{musicLength}</span>
        </p>
      </div>
    </div>
  );
};

export default MusicListItem;
