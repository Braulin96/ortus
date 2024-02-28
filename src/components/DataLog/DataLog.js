import PickDate from "./shared/PickDate";
import PickTime from "./shared/PickTime";
import SelectData from "./shared/SelectData";
import { IoIosInformationCircleOutline } from "react-icons/io";

const DataLog = () => {
  return (
    <>
      <div
        className="w-100 flex md:flex-row flex-col lg:gap-x-24 gap-x-12 gap-y-4 mx-auto py-10 p-4"
        style={{ width: "100%", maxWidth: "1700px" }}
      >
        <div className="flex flex-col justify-between border-2 border-gray-100 rounded-2xl px-6 py-4 shadow-xl">
          
          <div className="flex justify-between mb-4">
            <p className="text-xl">Date</p>
            <IoIosInformationCircleOutline color="gray" size={25} />
          </div>

          <div className="flex sm:gap-x-8 gap-x-4 w-full justify-between">
            <div className="flex gap-x-2 my-auto">
              <p className="mt-3">From:</p>
              <PickDate />
            </div>
            <div className="flex gap-x-2">
              <p className="mt-3">To:</p>
              <PickDate />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-8 justify-between border-2 border-gray-100 rounded-2xl p-4 shadow-xl">
          <div className="flex justify-between mb-4">
            <p className="text-xl">Time</p>
            <IoIosInformationCircleOutline color="gray" size={25} />
          </div>

          <div className="flex sm:gap-x-8 gap-x-4 justify-between">
            <div className="flex gap-x-2">
              <p className="mt-2">Start:</p>
              <PickTime />
            </div>

            <div className="flex gap-x-2">
              <p className="mt-2">End:</p>
              <PickTime />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DataLog;
