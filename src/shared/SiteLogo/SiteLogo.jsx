import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

const SiteLogo = () => {
  return (
    <Link
      to="/"
      className="  p-1 flex justify-center items-center gap-2 text-2xl font-bold text-purple-800"
    >
      <span className="text-4xl bg-purple-200 rounded-full ">
        <FaUserGraduate />
      </span>
      <p>EasyteacH</p>
    </Link>
  );
};

export default SiteLogo;
