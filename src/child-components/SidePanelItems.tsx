const SidePanelItems = (props: any) => {
  return (
    <div>
      <p className="text-base font-bold mt-4 text-gray-500">
        {props?.category}
      </p>
      {props?.items?.map((element: any) => {
        return (
          <div className="items-center gap-x-2 mt-2 gap-2 px-6 py-1 cursor-pointer text-gray-500 rounded-xl transition-colors duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 hover:text-white">
            <div className="flex items-center gap-x-4">
              <span className="text-xl">
                <element.icon />
              </span>
              <p className="text-base font-medium text-">{element.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SidePanelItems;
