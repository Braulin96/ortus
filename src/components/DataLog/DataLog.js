import PickDate from "./shared/PickDate";
import PickTime from "./shared/PickTime";
import SelectData from "./shared/SelectData";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GiDigitalTrace } from "react-icons/gi";


const DataLog = () => {
  return (
    <div
      className="mx-auto py-10 p-4"
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="mb-8 flex gap-x-2">
        <h2 className="text-3xl">DataLog</h2>
        <GiDigitalTrace className="my-auto" color="gray" size={35}  />
      </div>
      <div className="w-100 flex md:flex-row flex-col lg:gap-x-24 gap-x-12 gap-y-4">
        <div className="flex md:w-1/2 w-full flex-col justify-between border-2 border-gray-100 rounded-2xl px-6 py-4 shadow-lg">
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

        <div className="flex flex-col md:w-1/2 w-full gap-x-8 justify-between border-2 border-gray-100 rounded-2xl p-4 shadow-xl">
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

      <div className="mt-20 flex w-full md:flex-row flex-col lg:gap-x-24 gap-x-12 gap-y-12">
        <div className="md:w-1/2 w-full h-fit p-4 border-gray-100 rounded-xl shadow-lg">
          <SelectData />
        </div>
        <div className="md:w-1/2 w-full border-2 border-gray-100 shadow-2xl rounded-xl py-4">
          <h2 className="px-6">
            Name:
            <span className="font-semibold text-2xl ml-1"> Ambulance C</span>
          </h2>

          <div className="w-full flex flex-col mt-4 ">
            <div className="flex w-full justify-between bg-gray-100 px-6">
              <p>Position</p>
              <div className="flex gap-x-8">
                <p> X:287162</p>
                <p> y:287162</p>
              </div>
            </div>
            <div className="flex w-full justify-between px-6">
              <p>Position</p>
              <div className="flex gap-x-8">
                <p> X:287162</p>
                <p> y:287162</p>
              </div>
            </div>
            <div className="flex w-full justify-between bg-gray-100 px-6">
              <p>Position</p>
              <div className="flex gap-x-8">
                <p> X:287162</p>
                <p> y:287162</p>
              </div>
            </div>
            <div className="flex w-full justify-between px-6">
              <p>Position</p>
              <div className="flex gap-x-8">
                <p> X:287162</p>
                <p> y:287162</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataLog;
