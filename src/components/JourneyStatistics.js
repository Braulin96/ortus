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
    <div className="w-100 flex flex-col gap-y-4" style={{ width: "100%" }}>
      <div
        className="flex justify-between p-8 w-full"
        style={{ width: "100%" }}
      >
        <div className="p-4 w-full" style={{ width: "100%" }}>
          <div
            className="flex w-full flex-wrap gap-x-4"
            style={{ width: "100%" }}
          >
            <div className="w-1/4 mr-2 ml-2 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out shadow-lg">
              <Location />
              heelo
            </div>

            <div className="w-2/4  shadow-lg rounded-2xl p-4">
              <SpeedGpsGraph />
            </div>

            <div className="w-1/5 h-80 rounded-2xl shadow-lg py-4 px-6  flex flex-col">
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

      <div className="flex p-8 gap-x-8">
        <div>
          <DataDisplay />
        </div>
        <div className="w-full">
          <TimeGraph />
        </div>
      </div>
    </div>
  );
};
export default JourneyStatistics;
