import React from "react";

const OverSpeedTrends = () => {
  return (
    <div
      className="mx-auto py-10 p-4"
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="flex md:flex-row flex-col w-full gap-x-4 gap-y-4">
        <div className="md:w-1/2 w-full h-20 bg-green-200">graph 1</div>
        <div className="md:w-1/2 w-ful h-20 bg-red-400">goes the swiper</div>
      </div>
    </div>
  );
};
export default OverSpeedTrends;
