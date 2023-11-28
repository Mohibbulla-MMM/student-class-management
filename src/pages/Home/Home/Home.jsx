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
      <Testimonial/>
    </div>
  );
};

export default Home;
