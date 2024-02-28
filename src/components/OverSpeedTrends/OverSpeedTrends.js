import React from "react";
import { BsSpeedometer } from "react-icons/bs";
import SpeedGpsGraph from "../shared/FirstGraph/SpeedGpsGraph";

const OverSpeedTrends = () => {
  return (
    <div
      className="mx-auto py-10 p-4"
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="mb-8 flex gap-x-2">
        <h2 className="text-3xl">Over Speed Trends</h2>
        <BsSpeedometer className="my-auto" color="gray" size={35} />
      </div>
      <div className="flex md:flex-row flex-col w-full gap-x-4 gap-y-4">
        <div className="md:w-1/2 w-full rounded-2xl border-2 border-gray-100 shadow-lg p-2"><SpeedGpsGraph/></div>
        <div className="md:w-1/2 w-ful h-20 bg-red-400">goes the swiper</div>
      </div>
    </div>
  );
};
export default OverSpeedTrends;
