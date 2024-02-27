import React, { useState } from "react";
import OpenModal from "./OpenModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

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
  {
    name: "End Location",
    data: "Fox Street Studio",
    unit: "",
  },
  {
    name: "Highest Speed",
    data: "39",
    unit: "MP",
  },
];

const DataDisplay = () => {
  const [selectedData, setSelectedData] = useState(dataList[0]);

  const handleItemClick = (item) => {
    setSelectedData(item);
  };

  return (
    <>
      <div className="border-2 border-gray-100 h-80 rounded-2xl shadow-lg  w-72 flex flex-col overflow-hidden w-full">
        <div className="text-center space-y-4 my-auto py-4 px-6">
          <h2 className="text-lg font-semibold">{selectedData.name}</h2>
          <div className="h-20 flex">
            <p className="text-4xl font-bold m-auto">
              {selectedData.data}
              <span className="text-sm font-normal">{selectedData.unit}</span>
            </p>
          </div>

          <div className="m-auto text-center space-y-4 pt-2">
            <div className="flex gap-x-4">
              <Swiper
                className="flex w-full space-x-4"
                slidesPerView={3}
                loop={true}
                centeredSlides={false}
                //spaceBetween={0}
                grabCursor={true}
              >
                {dataList.map((list, index) => (
                  <SwiperSlide className="flex gap-x-4 mr-4">
                    <button
                      key={index}
                      className={`p-3 text-sm cursor-pointer rounded-lg transition-all duration-600 ${
                        selectedData === list
                          ? "bg-cyan-300 bg-opacity-30"
                          : "bg-gray-100"
                      }`}
                      onClick={() => handleItemClick(list)}
                    >
                      {list.name}
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="bg-cyan-300  py-2 px-2 w-full text-black flex justify-center">
          <OpenModal>
            <p className="text-gray-800 mx-auto">Know More</p>
          </OpenModal>
        </div>
      </div>
    
    </>
  );
};
export default DataDisplay;
