import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "@smastrom/react-rating/style.css";
// import { FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Navigation } from "swiper/modules";
import ReactStars from "react-rating-stars-component";
import useFeedBack from "../../hooks/useFeedBack";

const Testimonial = () => {
  const [feedback] = useFeedBack();
  //   console.log(feedback);

  return (
    <div>
      <section className="my-10">
        <SectionTitle
          title={"TEstimonial"}
          subTitle={"What our student says?"}
        />

        <section className="mt-5">
          <Swiper
            // install Swiper modules
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {feedback &&
              feedback?.map((item) => (
                <SwiperSlide key={item?._id}>
                  <div className="   max-w-2xl mx-auto flex gap-3   ">
                    {/* abater  */}
                    <div className="flex-1 flex justify-end">
                      <figure>
                        <img
                          style={{
                            borderRadius: "150px 0 150px 150px ",
                          }}
                          className="sm:w-60 sm:h-60 w-40 h-40 block object-cover "
                          src={item?.avater}
                          alt=""
                        />
                      </figure>

                      {/* <p>{`${item?.avater}`}</p> */}
                    </div>

                    {/* others informatio  */}
                    <div className="space-y-1 flex-1">
                      {/* name and Ratin  */}
                      <div className="   font-bold sm:pb-10 pb-3  ">
                        {/*  name */}
                        <p className="text-xl uppercase font-bold -mt-2  ">
                          {item?.name}
                        </p>
                        {/* rating  */}
                        <div className="text-sm flex gap-2 items-center ">
                          <span>Rating: </span>
                          <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            value={item?.ratign}
                            edit={false}
                            size={20}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>

                      {/* feedback text  */}
                      <h1 className="font-bold">{item?.title}</h1>
                      <p
                        title={`${item?.description}`}
                        className="h-[80px] sm:h-[100px] overflow-hidden text-sm text-gray-500 "
                      >
                        {item?.description}
                      </p>

                      {/* <p className="flex justify-center text-5xl ">
                        <FaQuoteLeft />
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      </section>
    </div>
  );
};

export default Testimonial;
