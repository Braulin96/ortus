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
        <p className="text-5xl font-bold">
          {selectedData.data}{" "}
          <span className="text-sm font-normal -ml-2">{selectedData.unit}</span>
        </p>

        <div className="m-auto text-center space-y-4">
          <div className="flex gap-x-4">
            {dataList.map((list, index) => (
              <div
                key={index}
                className="p-4 text-sm cursor-pointer"
                onClick={() => handleItemClick(list)}
              >
                {list.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DataDisplay;
