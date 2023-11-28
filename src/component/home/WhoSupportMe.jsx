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

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data &&
            data?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="flex-1   flex justify-center items-center">
                  <figure>
                    <img className="w-52" src={item?.image} alt="" />
                  </figure>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        {/* <section className="flex justify-center items-center gap-2 flex-wrap">
          {data &&
            data?.map((item) => (
              <div key={item?.id} className="flex-1 min-w-[150px]">
                <figure>
                  <img className="w-52" src={item?.image} alt="" />
                </figure>
              </div>
            ))}
        </section> */}
      </Container>
    </div>
  );
};

export default WhoSupportMe;
