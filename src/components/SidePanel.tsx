import SidePanelItems from "../child-components/SidePanelItems";
import { SidePanelNavItems } from "../data/SidePanelNavItems";

const SidePanel = () => {
  return (
    <div className="container mx-auto p-1">
      <img src="./assets/musicverse-logo.svg" alt="MusicVerse Logo"></img>
      {SidePanelNavItems.map((item) => {
        return <SidePanelItems {...item} />;
      })}
    </div>
  );
};

export default SidePanel;
