//Note: hooks
import React, { useRef } from "react";
//Note: components:
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css/bundle";


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
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const swiperRef = useRef();
  return (
    <>
      <div className="relative h-72 flex">
        {/* <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={pagination}
          modules={[Pagination]}
          className="h-full my-auto"
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
        </Swiper> */}
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        //navigation={true}
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
      </Swiper>

        {/* <div className="z-20 absolute left-1/2 -translate-x-20 bottom-1 center transform -translate-y-1/2 rounded-full">
          <button onClick={() => swiperRef.current?.slidePrev()}>Prev</button>
        </div>

        <div className="z-20 absolute right-1/2 translate-x-20 bottom-1 transform -translate-y-1/2 rounded-full">
          <button onClick={() => swiperRef.current?.slideNext()}>Next</button>
        </div> */}
      </div>
    </>
  );
};
export default SwiperPagination;
