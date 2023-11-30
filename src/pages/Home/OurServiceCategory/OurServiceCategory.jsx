import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Container from "../../../utils/Container";

const OurServiceCategory = () => {
  return (
    <div>
      {/* our services category container  */}
      <SectionTitle title={"our service category "} />
      <Container>
        <div className="">
          {/* card continer  */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* web development  */}
            <div className=" overflow-hidden flex   items-center flex-col gap-2 p-4 py-8 bg-[#0298FF] hover:bg-[#0298FF] duration-300 hover:text-white bg-opacity-10 rounded-lg text-center ">
              <figure>
                <img
                  className="border-4 rounded-full"
                  src="https://i.ibb.co/vZpSRY2/Screenshot-21.png"
                  alt=""
                />
              </figure>
              <h1 className="text-xl uppercase   ">Wev Development</h1>
              <p className="text-sm ">
                We convert any design file: PSD, Sketch, Ai, Adobe XD to pixel
                perfect, semantic and standard compliant HTML/CSS template.
              </p>
            </div>

            {/* Wordpress development  */}
            <div className="flex   items-center flex-col gap-2 p-4 py-8 bg-[#3784E8] hover:bg-[#3784E8] duration-300 hover:text-white bg-opacity-10 rounded-lg text-center">
              <figure>
                <img
                  className="border-4 rounded-full"
                  src="https://i.ibb.co/RDn5kQw/Screenshot-22.png"
                  alt=""
                />
              </figure>
              <h1 className="text-xl uppercase">Wordpress development</h1>
              <p className="text-sm ">
                We turn designs into high-quality, fully functional CMS driven
                websites based on WordPress.
              </p>
            </div>

            {/* video Editing   */}
            <div className="flex   items-center flex-col gap-2 p-4 py-8 bg-[#9C27B0] hover:bg-[#9C27B0] duration-300 hover:text-white bg-opacity-10 rounded-lg text-center">
              <figure>
                <img
                  className="border-4 rounded-full"
                  src="https://i.ibb.co/JkVVNmK/Screenshot-20.png"
                  alt=""
                />
              </figure>
              <h1 className="text-xl uppercase">video Editing </h1>
              <p className="text-sm ">
                Here at SafeSyntax we love taking your footage and turning it
                into an amazing video that you’ll just love to share.
                Stabilization, color grading, effects, titles, transitions we
                deliver it all in a professionally edited video.
              </p>
            </div>

            {/* marketing */}
            <div className="flex   items-center flex-col gap-2 p-4 py-8 bg-[#44BD32] hover:bg-[#44BD32] duration-300 hover:text-white bg-opacity-10 rounded-lg text-center">
              <figure>
                <img
                  className="border-4 rounded-full"
                  src="https://i.ibb.co/KNKN0kC/Screenshot-19.png"
                  alt=""
                />
              </figure>
              <h1 className="text-xl uppercase">Digital Marketing </h1>
              <p className="text-sm ">
                We make sure the most cost-effective online marketing services
                for your business. With major online, social, and other
                developments dynamically taking place, brands are more connected
              </p>
            </div>

            {/* graphics design   */}
            <div className="flex   items-center flex-col gap-2 p-4 py-8 bg-[#FF5722] hover:bg-[#FF5722] duration-300 hover:text-white bg-opacity-10 rounded-lg text-center">
              <figure>
                <img
                  className="border-4 rounded-full"
                  src="https://i.ibb.co/tPjJFZk/Screenshot-18.png"
                  alt=""
                />
              </figure>
              <h1 className="text-xl uppercase">Graphics Design</h1>
              <p className="text-sm ">
                Send your specification and we’ll send back a high-quality
                design that embraces your vision. We provide you branding, UX,
                UI, Logo, and any graphic design
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServiceCategory;
