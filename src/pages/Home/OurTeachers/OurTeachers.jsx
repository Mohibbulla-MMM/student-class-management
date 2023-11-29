import { FaEnvelope, FaPhone } from "react-icons/fa";
import useOurTeachers from "../../../hooks/useOurTeachers";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Container from "../../../utils/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OurTeachers = () => {
  const [teacher] = useOurTeachers();
  console.log(teacher);
  return (
    <div
      style={{
        backgroundImage: `url(${"https://hrsoftbd.com/assets/servicePhoto/_20210713153659.jpg"})`,
      }}
      className="bg-cover bg-center bg-fixed bg-blend-overlay bg-black bg-opacity-60 py-12 text-gray-300 font-semibold"
    >
      <div className="text-white">
        <SectionTitle title={"our teachers"} subTitle={"Meet"} />
      </div>
      <Container>
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
          {teacher &&
            teacher?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className="flex gap-3 items-center justify-center">
                  {/* abater  */}
                  <figure
                    style={{
                      borderRadius: "150px  150px 0 150px  ",
                    }}
                    className="sm:w-60 sm:h-60 w-40 h-40  overflow-hidden"
                  >
                    <img
                      className="block w-full h-full object-cover"
                      src={item?.image}
                      alt=""
                    />
                  </figure>
                  {/* informtin  */}
                  <div className="space-y-1">

                    {/* name  */}
                    <h1 className="font-bold text-xl text-white uppercase sm:text-3xl">
                      {item?.name}
                    </h1>

                    {/* designatio  */}
                    <h1 className="font-semibold  text-white sm:text-xl">Web Developer</h1>

                    {/* email  */}
                    <h1 className="font-semibold   flex gap-2 items-center ">
                      <span
                        style={{
                          borderRadius: "15px 15px 15px 0   ",
                        }}
                        className="w-6 h-6 bg-gray-800 text-xs
                       text-white flex justify-center items-center"
                      >
                        <FaEnvelope />
                      </span>
                      {item?.email}
                    </h1>

                    {/* phone */}
                    <h1 className="font-semibold   flex gap-2 items-center">
                      <span
                        style={{
                          borderRadius: "15px 15px 15px 0   ",
                        }}
                        className="w-6 h-6 bg-gray-800 text-xs
                       text-white flex justify-center items-center"
                      >
                        <FaPhone />
                      </span>
                      {item?.phone || "0155883365"}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default OurTeachers;
