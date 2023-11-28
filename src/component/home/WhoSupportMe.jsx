import useWhoSupportMe from "../../hooks/useWhoSupportMe";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import WaitPop from "../../shared/WaitPop";
import Container from "../../utils/Container";
// =======================
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const WhoSupportMe = () => {
  const [data, , isPending] = useWhoSupportMe();
  if (isPending) {
    return <WaitPop />;
  }
  //   console.log(data);
  return (
    <div>
      <Container>
        <SectionTitle title={"Who supports us?"} subTitle={"National Brand"} />
     
      
        {/* sm device hidden  */}
        <div className="hidden sm:block">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            // modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {data &&
              data?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="flex-1 flex flex-col  justify-center items-center p-4 shadow-xl mb-8  rounded-xl">
                    <figure>
                      <img  className="w-52 h-10 " src={item?.image} alt="" />
                    </figure>
                     
                    <p className="text-gray-500">{item?.description}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

          {/* sm device show */}
        <div className="block sm:hidden">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            // modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            // navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {data &&
              data?.map((item) => (
                <SwiperSlide key={item?.id}>
                  <div className="flex-1 flex flex-col  justify-center items-center p-4 shadow-xl mb-8  rounded-xl">
                    <figure>
                      <img  className="w-52 h-10 " src={item?.image} alt="" />
                    </figure>
                     
                    <p className="text-gray-500">{item?.description}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default WhoSupportMe;
