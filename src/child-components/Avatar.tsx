import { RxAvatar } from "react-icons/rx";

const Avatar = () => {
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-md">
      <RxAvatar className="text-3xl" />
    </div>
  );
};

export default Avatar;
