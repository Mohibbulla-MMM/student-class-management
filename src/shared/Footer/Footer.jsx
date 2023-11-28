import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import Container from "../../utils/Container";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import SiteLogo from "../SiteLogo/SiteLogo";
// import FooterMenu from "./FooterMenu";
// import FooterFakeMenu from "./FooterFakeMenu";
const Footer = () => {
  return (
    <div className="bg-purple-50">
      <Container>
        <div>
          <footer className="flex justify-center items-center gap-3 flex-col max-w-3xl mx-auto my-4 pt-12 ">
            <nav className="lg:col-span-2">
              <div className="text-3xl  ">
                <SiteLogo />
              </div>
              <p className="text-gray-500 text-center ">
                Empower your learning journey with our diverse range of online
                classes. From expert-led courses to interactive projects, we
                provide a platform for you to enhance your skills and achieve
                your goals. Join our community of passionate learners and
                experienced educators today. Elevate your knowledge, discover
                new possibilities, and shape your future with <b>EasyteacH</b>.
              </p>
            </nav>

            {/* col 3 */}
            <div className="flex justify-center items-center gap-3 ">
              <span className="btn   btn-ghost text-xl border   btn-circle bg-purple-100 text-purple-800 ">
                <FaFacebookF />
              </span>
              <span className="btn   btn-ghost text-xl border   btn-circle bg-purple-100 text-purple-800 ">
                <AiOutlineInstagram />
              </span>
              <span className="btn   btn-ghost text-xl border   btn-circle bg-purple-100 text-purple-800 ">
                <AiOutlineTwitter />
              </span>
              <span className="btn   btn-ghost text-xl border   btn-circle bg-purple-100 text-purple-800 ">
                <AiOutlineYoutube />
              </span>
              <span className="btn   btn-ghost text-xl border   btn-circle bg-purple-100 text-purple-800 ">
                <FaPinterestP />
              </span>
            </div>
          </footer>
          <footer className=" px-0 py-4 border-t    border-base-300">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36787.182576536215!2d88.94171907132888!3d24.4105384315826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc11714a398415%3A0x4b786d401795f55b!2sNatore!5e1!3m2!1sen!2sbd!4v1699421402154!5m2!1sen!2sbd"
                width={"100%"}
                height="300"
                style={{ order: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <p className="py-3 text-center">
                © 2023 Self-Help Insight. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
