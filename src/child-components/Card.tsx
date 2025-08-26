import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  play,
  setCurrentTrack,
  setQueue,
  Track,
} from "../features/player/playerSlice";
import { SongsList } from "../data/Songs";
import { TAB_LIST } from "../common/devConstants";

const Card = (props: Track) => {
  const dispatch = useDispatch();
  const { currentTrack } = useSelector((state: any) => state.player);
  const { currentTab } = useSelector((state: any) => state.dashboard);
  return (
    <div className="p-3">
      <div className="relative w-40 h-40 group">
        <img
          className="rounded-lg w-40 h-40 object-cover"
          src={props.cover ?? "https://placehold.jp/150x150.png"}
          alt="Card"
        ></img>
        {currentTab !== TAB_LIST.PODCAST && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <MdOutlinePlayCircleFilled
              className="hover:scale-110 cursor-pointer transition-transform text-white"
              size={50}
              onClick={() => {
                if (!currentTrack) {
                  dispatch(setQueue(SongsList));
                  dispatch(setCurrentTrack(props));
                } else if (currentTrack.id !== props.id) {
                  dispatch(setCurrentTrack(props));
                } else {
                  console.log("Hitted");
                  dispatch(setQueue(SongsList));
                  dispatch(play());
                }
              }}
            />
          </div>
        )}
      </div>
      <p className="text-sm mt-3 w-fit">{props.title}</p>
      <p className="text-xs text-gray-400 w-fit">{props.artist}</p>
    </div>
  );
};

export default Card;
