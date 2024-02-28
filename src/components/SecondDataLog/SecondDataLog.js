import React from "react";

const SecondDataLog = () => {
  return (
    <div
      className="mx-auto py-10 p-4"
      style={{ width: "100%", maxWidth: "1700px" }}
    >
      <div className="flex md:flex-row flex-col w-full justify-between gap-x-4">
        <div className="bg-red-500 lg:w-2/3 md:w-2/4 w-full h-20 p-4 rounded-xl border-gray-100 shadow-lg">maps here</div>
        <div className="bg-blue-500 lg:w-1/3 md:w-2/4 w-full h-20 p-4 rounded-xl border-gray-100 shadow-lg">others</div>
      </div>
      <div>container 2</div>
    </div>
  );
};

export default SecondDataLog;