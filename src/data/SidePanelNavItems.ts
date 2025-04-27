import { IoMdHome } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { MdAlbum } from "react-icons/md";
import { FaBookOpen, FaMusic } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { IoHeart } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

export const SidePanelNavItems = [
  {
    category: "Discover",
    items: [
      {
        icon: IoMdHome,
        title: "Home",
      },
      {
        icon: FaMicrophone,
        title: "Artist",
      },
      {
        icon: MdAlbum,
        title: "Album",
      },
      {
        icon: FaMicrophone,
        title: "Podcast",
      },
    ],
  },
  {
    category: "Library",
    items: [
      {
        icon: LuClock3,
        title: "Recent",
      },
      {
        icon: IoHeart,
        title: "Favorite",
      },
      {
        icon: FaMusic,
        title: "Playlist",
      },
    ],
  },
  {
    category: "More",
    items: [
      {
        icon: IoIosSettings,
        title: "Setting",
      },
      {
        icon: MdAccountCircle,
        title: "Account",
      },
      {
        icon: BiLogOut,
        title: "Logout",
      },
    ],
  },
];
