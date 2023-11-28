import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
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
          heading={"textimonials"}
          subHeading={"What Ou Clients Say"}
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
              feedback?.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="text-center space-y-2 max-w-2xl mx-auto">
                    <div className=" mx-auto flex justify-center ">
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        value={item?.ratign}        
                        edit={false}                
                        size={36}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>

                    <p className="flex justify-center text-5xl ">
                      <FaQuoteLeft />
                    </p>

                    <p className="mx-10">{item?.details}</p>

                    <p className="text-xl uppercase text-yellow-600 ">
                      {item?.name}
                    </p>
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
