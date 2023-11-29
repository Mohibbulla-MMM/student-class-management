import { Link } from "react-router-dom";
import Container from "../../../utils/Container";

const BecomeInstructor = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-center">
          {/* col two  */}
          <div
          style={{
            backgroundImage:`url(${"https://safesyntax.com/wp-content/uploads/2021/06/safesyntax-bg.png"})`
          }}
          className="flex-1 bg-right bg-cover w-full flex ">
            <figure>
              <img 
              className="block rounded-lg"
                // src="https://hrsoftbd.com/assets/servicePhoto/_20210713153659.jpg"
                src="https://safesyntax.com/wp-content/uploads/2021/06/bg.png"
                alt=""
              />
            </figure>
          </div>
          {/* col one  */}
          <div className="flex-1  space-y-2   max-w-xl">
            <h1 className="font-bold text-2xl">Become an Instructor </h1>
            <p>
              If you are passionate about teaching and want to make a
              difference, join our platform as a teacher. Share your knowledge
              and inspire the next generation of learners.
            </p>
            <p>
              If you are passionate about teaching and want to make a
              difference, join our platform as a teacher.  
            </p>
            <Link to={'/teach-on-easy'} className="btn rounded bg-purple-800 hover:bg-purple-900 text-white border-none">
              Start Teaching Today
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BecomeInstructor;
