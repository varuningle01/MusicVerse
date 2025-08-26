type ArtistProps = {
  id: number;
  name: string;
  image: string;
  genre?: string;
};

const ArtistCard = ({ name, image, genre }: ArtistProps) => {
  return (
    <div className="p-3">
      <div className="relative w-40 h-40 group">
        <img
          className="rounded-full w-40 h-40 object-cover shadow-md"
          src={image || "https://placehold.jp/150x150.png"}
          alt={name}
        />
      </div>
      <p className="text-sm mt-3 text-center font-medium">{name}</p>
      {genre && <p className="text-xs text-gray-400 text-center">{genre}</p>}
    </div>
  );
};

export default ArtistCard;
