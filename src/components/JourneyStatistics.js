import Location from "./shared/Location";
import SpeedGpsGraph from "./shared/FirstGraph/SpeedGpsGraph";
import ExpandAccordion from "./shared/ExpandAccordion";

const JourneyStatistics = () => {
  return (
    <div className="w-100" style={{ width: "100%" }}>
      <div className="flex justify-between px-4 gap-x-4 py-8">
        <div className="bg-green-200 w-1/3 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <Location />
        </div>

        <div className="p-4 w-full ">
          <div className="flex gap-x-4">
            <div className="w-2/3 shadow-lg rounded-2xl p-4">
              <SpeedGpsGraph />
            </div>

            <div className="w-80 h-80 rounded-2xl ">
            <ExpandAccordion time="Time: 09:03:45" gps="GPS Speed: 123 Km/h" vehicle="Vehicle Speed: 223km/h"
            description="some more usefull informations can be added"/>
            </div>
          </div>
          <div>graphic 2</div>
        </div>
       
      </div>
    
      
    </div>
  );
};
export default JourneyStatistics;
