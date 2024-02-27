import Location from "./shared/Location";

const JourneyStatistics = () => {
  return (
    <div className="w-100" style={{ width: "100%" }}>
      <div className="flex justify-between px-4 gap-x-4 py-8">
        <div className="bg-green-200 w-1/3 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Location />
        </div>

        <div className="bg-blue-500 w-full">
          <div>graphic 1</div>
          <div>graphic 2</div>
        </div>
      </div>

      {/* <div className="bg-red-200 w-80 h-80">
        <Location />
      </div> */}
    </div>
  );
};
export default JourneyStatistics;
