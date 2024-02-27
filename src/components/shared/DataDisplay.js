import React, { useState } from "react";

const dataList = [
  {
    name: "Journey Distance",
    data: "5.31",
    unit: "Miles",
  },
  {
    name: "Journey Duration",
    data: "00:13:11",
    unit: "s",
  },
  {
    name: "Start Location",
    data: "Fox Street Studio",
    unit: "",
  },
];

const DataDisplay = () => {
  const [selectedData, setSelectedData] = useState(dataList[0]);

  const handleItemClick = (item) => {
    setSelectedData(item);
  };

  return (
    <div className="border-2 border-gray-100 h-80 rounded-2xl shadow-lg py-4 px-6 w-72 flex flex-col overflow-y-auto">
      <div className="text-center space-y-4 my-auto">
        <h2 className="text-xl font-semibold">{selectedData.name}</h2>
        <div className="h-20 flex">
          <p className="text-4xl font-bold m-auto">
            {selectedData.data}
            <span className="text-sm font-normal">{selectedData.unit}</span>
          </p>
        </div>

        <div className="m-auto text-center space-y-4">
          <div className="flex gap-x-4">
            {dataList.map((list, index) => (
              <button
                key={index}
                className={`p-2 text-sm cursor-pointer rounded-lg ${
                  selectedData === list ? "bg-blue-500" : "bg-gray-200"
                }`}
                onClick={() => handleItemClick(list)}
              >
                {list.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataDisplay;
