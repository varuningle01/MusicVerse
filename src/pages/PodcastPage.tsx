import Card from "../child-components/Card";
import { PodcastList } from "../data/PodcastList";

export const PodcastPage = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-row items-center">
        <p className="text-2xl flex-1">Podcast</p>
        <p className="text-xs text-purple-400">View All</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {PodcastList.map((podcast) => (
          <>
            <Card {...podcast} />
          </>
        ))}
      </div>
    </div>
  );
};
