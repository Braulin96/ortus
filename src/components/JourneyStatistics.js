import Location from "./shared/Location";
import SpeedGpsGraph from "./shared/FirstGraph/SpeedGpsGraph";
import ExpandAccordion from "./shared/ExpandAccordion";
import { FaClock } from "react-icons/fa6";
import { RiGpsFill } from "react-icons/ri";
import { BiSolidAmbulance } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import OpenModal from "./shared/OpenModal";
import DataDisplay from "./shared/DataDisplay";
import TimeGraph from "./shared/SecondGraph/TimeGraph";

const JourneyStatistics = () => {
  return (
    <div className="w-100 flex flex-col gap-y-4 mx-auto" style={{ width: "100%", maxWidth:"1700px" }}>
      <div
        className="flex justify-between sm:p-8 p-2 w-full"
        style={{ width: "100%" }}
      >
        <div className="w-full" style={{ width: "100%" }}>
          <div
            className="flex w-full flex-wrap gap-x-4 gap-y-8"
            style={{ width: "100%" }}
          >
            <div className="xl:w-1/4 sm:w-1/2 w-full mr-2 ml-2 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out shadow-lg border-2 border-gray-100">
              <Location currentHeight={320} />
            </div>

            <div className="xl:w-2/4 xl:order-none order-last w-full shadow-lg rounded-2xl p-4 border-2 border-gray-100">
              <SpeedGpsGraph />
            </div>

            <div className="xl:w-1/5 flex-grow h-80 rounded-2xl shadow-lg py-4 px-6  flex flex-col border-2 border-gray-100">
              <div className="flex justify-between">
                <h2 className="text-lg">Current Status</h2>
                <OpenModal>
                  <IoIosInformationCircleOutline color="black" size={25} />
                </OpenModal>
              </div>

              <div className="m-auto space-y-4">
                <div className="flex gap-x-2">
                  <FaClock color="#5E6583" size={30} className="my-auto" />
                  <p className="my-auto">
                    Time:
                    <span className="text-xl font-bold text-[#0FD6F5]">
                      09:03:45
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <RiGpsFill color="#5E6583" size={30} className="my-auto" />
                  <p className="my-auto ">
                    GPS Speed:
                    <span className="text-xl font-bold text-[#0FD6F5]">
                      123
                    </span>
                  </p>
                </div>
                <div className="flex gap-x-2">
                  <BiSolidAmbulance
                    color="#5E6583"
                    size={30}
                    className="my-auto"
                  />
                  <p className="my-auto ">
                    Vehicle Speed:
                    <span className="text-xl font-bold text-[#0FD6F5]">
                      223
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-x-8  flex-wrap w-full gap-y-4 justify-center md:px-0 sm:px-8 px-4">
        <div className="md:w-1/4 w-full">
          <DataDisplay />
        </div>
        <div className="md:w-2/3 w-full">
          <TimeGraph />
        </div>
      </div>
    </div>
  );
};
export default JourneyStatistics;
