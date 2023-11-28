import Aboute from "../../../component/About/Aboute";
import PopularClass from "../../../component/home/PopularClass";
import Testimonial from "../../../component/home/Testimonial";
import WhoSupportMe from "../../../component/home/WhoSupportMe";
import Banner from "../../../component/home/banner";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <PopularClass />
      <WhoSupportMe />
      <Testimonial />
      <Aboute />
    </div>
  );
};

export default Home;
