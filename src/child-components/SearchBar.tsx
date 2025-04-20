import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="p-2 flex-1 border rounded-xl border-gray-400 flex items-center gap-x-4">
      <CiSearch className="text-gray-400 text-xl" />
      <input
        type="search"
        className="w-full appearance-none outline-none placeholder:text-gray-400 text-xs"
        placeholder="Search artist, title, album"
      />
    </div>
  );
};

export default SearchBar;
