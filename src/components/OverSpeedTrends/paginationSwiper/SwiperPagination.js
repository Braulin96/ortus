//Note: hooks
import React, { useRef } from "react";
//Note: components:
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/bundle";

const SwiperModule = ({ ambulanceName }) => {
  return (
    <div className="w-full border-2 border-gray-100 shadow-2xl rounded-xl py-4 flex flex-col">
      <h2 className="px-6">
        Name:
        <span className="font-semibold text-2xl ml-1">{ambulanceName}</span>
      </h2>

      <div className="w-full flex flex-col mt-4 ">
        <div className="flex w-full justify-between bg-gray-100 px-6">
          <p>Position</p>
          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between px-6">
          <p>Position</p>

          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between bg-gray-100 px-6">
          <p>Position</p>
          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between px-6">
          <p>Position</p>
          <p> X:287162</p>
        </div>
      </div>
    </div>
  );
};

const data = [
  { id: 1, component: "Hero section RosaCleaning" },
  { id: 2, component: "Pricing RosaCleaning" },
  { id: 3, component: "Steps RosaCleaning" },
];

const SwiperPagination = () => {
  const pagination = {
    clickable: true,

    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const swiperRef = useRef();
  return (
    <>
      <div className="relative sm:px-20 bg-green-400 h-64 flex">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={pagination}
          modules={[Pagination]}
          className=" h-full my-auto bg-red-300"
        >
          <SwiperSlide className="mt-2 bg-blue-400 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance A" />
          </SwiperSlide>
          <SwiperSlide className="mt-4 bg-blue-400 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance B" />
          </SwiperSlide>
          <SwiperSlide className="mt-2 bg-blue-400 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance C" />
          </SwiperSlide>
        </Swiper>

        <div className="z-20 absolute left-1/2 -translate-x-20 bottom-1 center transform -translate-y-1/2 rounded-full">
          <button className="" onClick={() => swiperRef.current?.slidePrev()}>
            Prev
          </button>
        </div>

        <div className="z-20 absolute right-1/2 translate-x-20 bottom-1 transform -translate-y-1/2 rounded-full">
          <button className="" onClick={() => swiperRef.current?.slideNext()}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};
export default SwiperPagination;
