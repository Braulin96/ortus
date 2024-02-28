import React from "react";
import Location from "../shared/Location";
import SecondDataDisplay from "./SecondDataDisplay";
import SpeedGpsGraph from "../shared/FirstGraph/SpeedGpsGraph";
import SelectData from "../DataLog/shared/SelectData";
import SpeedDisplayGraph from "../shared/SecondGraph/SpeedDisplayGraph/SpeedDisplayGraph";

const SecondDataLog = () => {
  return (
    <>
      <div
        className="mx-auto py-10 p-4 space-y-12"
        style={{ width: "100%", maxWidth: "1700px" }}
      >
        <div className="flex lg:flex-row flex-col w-full justify-between gap-x-4">
          <div className="lg:w-1/3 w-full  mr-2 ml-2 h-80 overflow-hidden rounded-2xl opacity-90 hover:opacity-100 transition-opacity duration-500 ease-in-out shadow-lg border-2 border-gray-100 ">
            <Location />
          </div>
          
          <div className="bg-blue-500 lg:w-1/3  w-full py-4 sm:px-4 px-0 rounded-xl border-gray-100 border-2 mt-8 md:mt-0 shadow-lg">
            fetch goes hoverMode
          </div>

          <div className="lg:w-1/3 w-full py-4 sm:px-4 px-0 rounded-xl bg-gray-50 border-gray-100 border-2 mt-8 md:mt-0">
            <h2 className="text-2xl mb-4">Ambulance Data</h2>
            <div className="flex justify-between gap-x-2 bg-white  border-2 border-gray-100 p-2 rounded-xl shadow-2xl">
              <p className="">
                Name:
                <span className="font-semibold"> Ambulance D</span>
              </p>
              <p className="">
                Date:
                <span className="font-semibold ">28/02/2024</span>
              </p>
              <p className="">
                Time:
                <span className="font-semibold"> 10h40s</span>
              </p>
            </div>
            <div className="mt-8">
              <SecondDataDisplay />
            </div>

            <div className="mt-8 flex flex-col justify-between gap-x-2 bg-white  border-2 border-gray-100 rounded-xl shadow-2xl gap-y-4 p-4">
              <div className="flex gap-x-2 w-full justify-between">
                <p className=" w-28">Location:</p>
                <input
                  className="border border-gray-400 rounded-xl h-7 px-2 py-4 w-full"
                  type="text"
                  placeholder="type..."
                />
              </div>
              <div className="flex gap-x-2  w-full justify-between">
                <p className="w-28">Speed:</p>
                <input
                  min={0}
                  max={400}
                  className="border border-gray-400 rounded-xl h-7 px-2 py-4 w-full"
                  type="number"
                  placeholder="in mph..."
                />
              </div>
              <div className="flex gap-x-2  w-full justify-between">
                <p className="w-28">Speed Limit:</p>
                <input
                  min={0}
                  max={400}
                  className="border border-gray-400 rounded-xl h-7 px-2 py-4 w-full"
                  type="number"
                  placeholder="in mph..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="w-full flex md:flex-row flex-col gap-x-4 gap-y-4">
          <div className="border-2 border-gray-100 rounded-xl shadow-lg p-4 md:w-1/4 w-full">
            <SpeedGpsGraph />
          </div>
          
          <div className="border-2 border-gray-100 rounded-xl shadow-lg p-4 md:w-2/4 w-full">
            <p className="text-2xl"> Velocity Box</p>
            <div className="flex sm:flex-row flex-col gap-x-2">
              <div className="sm:w-1/3 w-full">
                <SpeedDisplayGraph />
              </div>
              <div className="sm:w-1/3 w-full">
                <SpeedDisplayGraph />
              </div>
              <div className="sm:w-1/3 w-full">
                <SpeedDisplayGraph />
              </div>
            </div>
          </div>
          <div className="border-2 border-gray-100 rounded-xl shadow-lg p-4 md:w-1/4 w-full">
            <SelectData />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SecondDataLog;