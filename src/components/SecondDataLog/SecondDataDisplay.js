import React, { useState } from "react";
import OpenModal from "../shared/OpenModal";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const dataList = [
  {
    name: "Temperature",
    data: "14.7",
    unit: "C",
  },
  {
    name: "Wind Speed",
    data: "3",
    unit: "mph",
  },
  {
    name: "Wind Direction",
    data: "WSW",
    unit: "",
  },
  {
    name: "W Station",
    data: "Albermale",
    unit: "",
  },
  {
    name: "Date Updated",
    data: "2022-09-22",
    unit: "",
  },
  {
    name: "Time Updated",
    data: "09:00:00",
    unit: "",
  },
];

const SecondDataDisplay = () => {
  const [selectedData, setSelectedData] = useState(dataList[0]);

  const handleItemClick = (item) => {
    setSelectedData(item);
  };

  return (
    <>
      <div className="border-2 border-gray-100  rounded-2xl flex flex-col overflow-hidden w-full">
        <div className="text-center space-y-2 my-auto py-4 px-2">
          <h2 className="text-xl">{selectedData.name}</h2>
          <div className=" flex">
            <p className="text-4xl m-auto">
              {selectedData.data}
              <span className="text-sm font-normal">{selectedData.unit}</span>
            </p>
          </div>

          <div className="m-auto text-center space-y-2 pt-2">
            <div className="flex gap-x-4">
              <Swiper
                className="flex w-full mr-4"
               // slidesPerView={2}
                loop={true}
                centeredSlides={false}
                spaceBetween={20}
                grabCursor={true}
                breakpoints={{
                  // Customize the number of slides per view for different screen sizes
                  240: {
                    slidesPerView: 2, 
                  },
                  640: {
                    slidesPerView: 3, 
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 2, 
                  },
                  1500: {
                    slidesPerView: 3, 
                  },

                }}
              >
                {dataList.map((list, index) => (
                  <SwiperSlide  key={index} className="flex gap-x-4 mr-4">
                    <button
                      className={`p-3 w-36 text-sm cursor-pointer rounded-lg transition-all duration-600 ${
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
        <div className="bg-cyan-300 py-2 w-full text-black flex justify-center">
          <OpenModal>
            <p className="text-gray-800 mx-auto font-semibold">Know More</p>
          </OpenModal>
        </div>
      </div>
    </>
  );
};
export default SecondDataDisplay;
