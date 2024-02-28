//Note: hooks
import React, { useRef, useState } from "react";
//Note: components:
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import "swiper/css/bundle";

import { GoArrowUpRight } from "react-icons/go";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const data = [
  { id: 1, alt: "Hero section RosaCleaning" },
  { id: 2, alt: "Pricing RosaCleaning" },
  { id: 3, alt: "Steps RosaCleaning" },
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
      {/* <div
      className="relative  sm:px-20 bg-green-400"
      //style={{ maxWidth: "calc(100w - 10px)", width: "calc(100vw - 2rem)" }}
    >
      <Swiper
        className="flex w-full relative justify-center items-center"
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={5}
        //effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.7,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[
          EffectCube,
          Pagination,
          EffectCoverflow,
          Autoplay,
          Navigation,
          Scrollbar,
        ]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((display, index) => (
          <SwiperSlide className="mx-auto w-full flex mb-4" key={display.id}>
           
            <p>{display.alt}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-20 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <HiArrowSmallLeft
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
      <div className="z-20 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <HiArrowRight
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
    </div> */}
      <div>
        <Swiper pagination={pagination} modules={[Pagination]} className="h-20">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default SwiperPagination;
