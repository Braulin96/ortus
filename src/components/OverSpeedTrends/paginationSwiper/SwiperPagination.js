//Note: hooks
import React, { useRef, useState, useEffect} from "react";
//Note: components:
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { useSwiperSlide } from 'swiper/react';

const SwiperModule = ({ ambulanceName }) => {
  return (
    <div className="w-full py-4 flex flex-col px-4">
      <h2 className="font-semibold text-2xl ml-1">{ambulanceName}</h2>
      <div className="w-full flex flex-col mt-4 ">
        <div className="flex w-full justify-between bg-gray-100 ">
          <p>Position</p>
          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Position</p>
          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between bg-gray-100">
          <p>Position</p>
          <p> X:287162</p>
        </div>
        <div className="flex w-full justify-between">
          <p>Position</p>
          <p> X:287162</p>
        </div>
      </div>
    </div>
  );
};

const SwiperPagination = () => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const swiper = swiperRef.current;
    if (swiper) {
      swiper.on('slideChange', () => {
        setCurrentSlide(swiper.activeIndex);
      });
    }
  }, []);

  return (
    <>
        <p>Current slide is {currentSlide + 1}</p>
      <div className="relative h-72 flex">
      
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={{
            clickable: true,
          }}
          // navigation={{}}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="mt-2 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance A" />
          </SwiperSlide>
          <SwiperSlide className="mt-4mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance B" />
          </SwiperSlide>
          <SwiperSlide className="mt-2 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance C" />
          </SwiperSlide>
          <SwiperSlide className="mt-2 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance D" />
          </SwiperSlide>
          <SwiperSlide className="mt-2 mx-auto w-full flex justify-center text-center items-center">
            <SwiperModule ambulanceName="Ambulance E" />
          </SwiperSlide>
        </Swiper>
        <div className="z-20 absolute shadow-lg bg-opacity-100 hover:bg-opacity-70 bg-gray-400 left-1/2 -translate-x-20 -bottom-2 center transform -translate-y-1/2 rounded-full h-7 aspect-square flex">
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <GrFormPrevious color="white" size={25} />
          </button>
        </div>
        <div className="z-20 absolute shadow-lg bg-opacity-100 hover:bg-opacity-70 bg-gray-400 right-1/2 translate-x-20 -bottom-2 center transform -translate-y-1/2 rounded-full h-7 aspect-square flex">
          <button
            className="m-auto"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <GrFormNext color="white" size={25} />
          </button>
        </div>
      </div>
    </>
  );
};
export default SwiperPagination;
