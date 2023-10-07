const RestaurantLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
          <h1 className="text-7xl text-white captitalize text-shadow text-center">
            Milestones Grill (Toronto)
          </h1>
        </div>
      </div>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </div>
  );
};

export default RestaurantLayout;
