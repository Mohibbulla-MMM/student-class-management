import { Carousel } from "react-responsive-carousel";
import "./banner.css";

const Banner = () => {
  return (
    <div className="mm-hero-carousel hover:cursor-grab ">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={8000}
        // axis={"vertical"}
        // centerMode={true}
        dynamicHeight={"100vh"}
        emulateTouch={true}
      >
        <div>
          <img src="https://i.ibb.co/PF0jnX0/bg-1.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/mGQTncB/bg-2.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/PF0jnX0/bg-1.png" />
        </div>
        <div>
          <img src="https://i.ibb.co/mGQTncB/bg-2.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
