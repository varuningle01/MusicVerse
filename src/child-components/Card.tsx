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
    <div className="border-2 border-purple-500 p-3">
      <img
        className="rounded-lg"
        src="https://placehold.jp/150x150.png"
        alt="Card"
      ></img>
      <p className="text-xl">{item.musicName}</p>
      <p className="text-xl">{item.artistName}</p>
    </div>
  );
};

export default Card;
