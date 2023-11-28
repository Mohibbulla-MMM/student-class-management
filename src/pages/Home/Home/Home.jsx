import Aboute from "../../../component/About/Aboute";
import PopularClass from "../../../component/home/PopularClass";
import Testimonial from "../../../component/home/Testimonial";
import WhoSupportMe from "../../../component/home/WhoSupportMe";
import Banner from "../../../component/home/banner";
import BecomeInstructor from "../BecomeInstructor/BecomeInstructor";

const Home = () => {
  return (
    <div className="space-y-16">
      <BecomeInstructor />
      <Banner />
      <Aboute />
      <PopularClass />
      <WhoSupportMe />
      <Testimonial />
    </div>
  );
};

export default Home;
