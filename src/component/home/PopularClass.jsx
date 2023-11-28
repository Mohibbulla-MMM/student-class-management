import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Pagination } from "swiper/modules";
import usePopularClass from "../../hooks/usePopularClass";
import WaitPop from "../../shared/WaitPop";
import Container from "../../utils/Container";

const PopularClass = () => {
  const [data, , isPending] = usePopularClass();
  if (isPending) {
    return <WaitPop />;
  }
  console.log(data);
  return (
    <div>
      <Container>
        <section className="hidden lg:block">
          <div className="-mb-6">
            <SectionTitle
              title={"Our popular classes"}
              subTitle={`Total class: ${data?.length} `}
            />
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwipe"
          >
            {data &&
              data?.map((item) => (
                <SwiperSlide key={item?._id}>
                  <div className="flex justify-center items-center flex-col  mx-auto h-[300px]">
                    {/* banner part */}
                    <div className="flex justify-center items-center flex-col  mx-auto">
                      <img
                        src={item?.image}
                        alt=""
                        className="w-full object-cover min-h-[200px] -mb-5 rounded-md  "
                      />
                      <h4
                        style={{ textShadow: " 2px 2px #000000" }}
                        className="text-center uppercase   text-lg text-white drop-shadow  -mt-6 mb-6 "
                      >
                        {item?.title}
                      </h4>
                    </div>
                    {/* abater*/}

                    <b> Totla Enroll: {item?.totalEnroll}</b>
                    <b> Price: ${item?.price}</b>
                    <div></div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
        <section className="block lg:hidden">
          <div className="-mb-6">
            <SectionTitle
              title={"Our popular classes"}
              subTitle={`Total class: ${data?.length} `}
            />
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwipe"
          >
            {data &&
              data?.map((item) => (
                <SwiperSlide key={item?._id}>
                  <div className="flex justify-center items-center flex-col  mx-auto h-[300px] sm:h-[400px]">
                    {/* banner part */}
                    <div className="flex justify-center items-center flex-col  mx-auto">
                      <img
                        src={item?.image}
                        alt=""
                        className=" w-[300px] sm:w-[500px] object-cover min-h-[200px] -mb-5 rounded-md  "
                      />
                      <h4
                        style={{ textShadow: " 2px 2px #000000" }}
                        className="text-center uppercase   text-lg text-white drop-shadow  -mt-6 mb-6 "
                      >
                        {item?.title}
                      </h4>
                    </div>
                    {/* abater*/}

                    <b> Totla Enroll: {item?.totalEnroll}</b>
                    <b> Price: ${item?.price}</b>
                    <div></div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </Container>
    </div>
  );
};

export default PopularClass;
