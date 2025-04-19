import React from "react";

type CardProps = {
  item: {
    id: number;
    musicName: string;
    artistName: string;
  };
};

const Card = ({ item }: CardProps) => {
  return (
    <div className="p-3">
      <img
        className="rounded-lg"
        src="https://placehold.jp/150x150.png"
        alt="Card"
      ></img>
      <p className="text-sm mt-3">{item.musicName}</p>
      <p className="text-xs text-gray-400">{item.artistName}</p>
    </div>
  );
};

export default Card;
