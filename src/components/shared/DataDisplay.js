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
    data: "02:13:11",
    unit: "s",
  },
  {
    name: "Start Location",
    data: "Manchester",
    unit: "",
  },
  {
    name: "End Location",
    data: "London",
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
      <div className="border-2 bg-white border-gray-100 h-80 rounded-2xl shadow-lg flex flex-col overflow-hidden w-full">
        <div className="text-center space-y-4 my-auto py-4 px-2">
          <h2 className="text-xl">{selectedData.name}</h2>
          <div className="h-20 flex">
            <p className="text-4xl m-auto">
              {selectedData.data}
              <span className="text-sm font-normal">{selectedData.unit}</span>
            </p>
          </div>

          <div className="m-auto text-center space-y-4 pt-2">
            <div className="flex gap-x-4">
              <Swiper
                className="flex w-full space-x-4"
                //slidesPerView={2}
                loop={true}
                centeredSlides={false}
                //spaceBetween={0}
                grabCursor={true}
                breakpoints={{
                  // Customize the number of slides per view for different screen sizes
                  240: {
                    slidesPerView: 3, 
                  },
                  640: {
                    slidesPerView: 3, 
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3, 
                  },
                }}
              >
                {dataList.map((list, index) => (
                  <SwiperSlide className="flex gap-x-4 mr-4">
                    <button
                      key={index}
                      className={`p-3 w-24 text-sm cursor-pointer rounded-lg transition-all duration-600 ${
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
        <div className="bg-cyan-300  py-2  w-full flex justify-center">
          <OpenModal>
            <p className="text-gray-800 mx-auto font-semibold">Know More</p>
          </OpenModal>
        </div>
      </div>
    </>
  );
};
export default DataDisplay;
