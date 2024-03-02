import Location from "./shared/Location";
import SpeedGpsGraph from "./shared/FirstGraph/SpeedGpsGraph";
import { FaClock } from "react-icons/fa6";
import { RiGpsFill } from "react-icons/ri";
import { BiSolidAmbulance } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import OpenModal from "./shared/OpenModal";
import DataDisplay from "./shared/DataDisplay";
import TimeGraph from "./shared/SecondGraph/TimeGraph";

const JourneyStatistics = () => {
  return (
    <div
      className="w-full flex flex-col gap-y-8 mx-auto md:px-8 px-2"
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="w-full flex justify-between mb-4">
        <h1 className="text-4xl font-light">
          Customer Name
        </h1>
        <button className="px-3 py-2 border-2 bg-gray-600 rounded-full text-white font-bold hover:opacity-70 transition-all duration-700 shrink-0 h-fit">
          Download pdf
        </button>
        
      </div>
      <div className="flex justify-between w-full" style={{ width: "100%" }}>
        <div className="w-full" style={{ width: "100%" }}>
          <div
            className="flex md:flex-row flex-col w-full lg:gap-x-8 md:lg:gap-x-4 gap-x-2 gap-y-8"
            style={{ width: "100%" }}
          >
            <div className="md:w-1/4 w-full mr-2 ml-2 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100  ease-in-out shadow-lg border-2 border-gray-100 scale-100 hover:scale-105 hover:shadow-2xl transition-all duration-700">
              <Location currentHeight={320} />
            </div>

            <div className="md:w-2/4  w-full shadow-lg rounded-2xl p-4 border-2 border-gray-100 scale-100 hover:scale-105 hover:shadow-2xl transition-all duration-700">
              <SpeedGpsGraph />
            </div>

            <div className="md:w-1/4 w-full h-80 rounded-2xl shadow-lg py-4 px-6  flex flex-col border-2 border-gray-100
             hover:scale-105 hover:shadow-2xl transition-all duration-700">
              <div className="flex justify-between">
                <h2 className="text-xl">Current Status</h2>
                <OpenModal>
                  <IoIosInformationCircleOutline className="ml-auto" color="black" size={25} />
                </OpenModal>
              </div>
              <div className="m-auto space-y-4">   
                <div className="flex gap-x-2">
                  <FaClock color="#67E8F9" size={45} className="my-auto opacity-70" />
                  <div>
                    <p className="my-auto text-sm">Time:</p>
                    <p className="text-2xl">09:03:45<span className="text-sm">s</span></p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <RiGpsFill color="#29E37C" size={50} className="my-auto opacity-80" />
                  <div>
                    <p className="my-auto text-sm">GPS Speed:</p>
                    <p className="text-2xl">123 <span className="text-sm">m/s</span></p>
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <BiSolidAmbulance
                    color="#C61A05"
                    size={40}
                    className="my-auto opacity-80"
                  />
                  <div>
                    <p className="my-auto text-sm">Vehicle Speed:</p>
                    <p className="text-2xl">223 <span className="text-sm">mph</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:gap-x-8 md:lg:gap-x-4 gap-x-2 md:flex-row flex-col w-full gap-y-4 justify-between">
        <div className="md:w-1/3 w-full hover:scale-105 hover:shadow-2xl transition-all duration-700">
          <DataDisplay />
        </div>
        <div className="md:w-2/3 w-full hover:scale-105 hover:shadow-2xl transition-all duration-700">
          <TimeGraph />
        </div>
      </div>
    </div>
  );
};
export default JourneyStatistics;
