import { FaHome, FaSeedling, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { RiGitPullRequestFill } from "react-icons/ri";
import useRoleChaker from "../../../../hooks/useRoleChaker";
import { ImStatsDots } from "react-icons/im";
import { MdRoundaboutLeft } from "react-icons/md";
const DashMenu = () => {
  // const roolChaker = "teacher";
  const [roolChaker] = useRoleChaker();
  console.log(roolChaker);

  return (
    <div className="w-full space-y-1 py-1">
      {/* admin rool menu -------------- */}
      {roolChaker === "admin" && (
        <>
          <NavLink
            to="/dashbord"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaUser />
            Profile
          </NavLink>

          <NavLink
            to="/dashbord/users"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <MdGroups />
            Users
          </NavLink>

          {/* all class */}
          <NavLink
            to="/dashbord/all-class"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaBook />
            All Class
          </NavLink>

          <NavLink
            to="/dashbord/teacher-request"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <RiGitPullRequestFill />
            Teacher Request
          </NavLink>
        </>
      )}

      {/* teacher rool menu ------------------ */}
      {roolChaker === "teacher" && (
        <>
          <NavLink
            to="/dashbord"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaUser />
            Profile
          </NavLink>
          {/* my class  */}
          <NavLink
            to="/dashbord/my-class"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <RiGitPullRequestFill />
            My Class
          </NavLink>

          {/* add class */}
          <NavLink
            to="/dashbord/add-class"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaBook />
            Add Class
          </NavLink>
        </>
      )}

      {/* user rool menu ------------------ */}
      {roolChaker === "user" && (
        <>
          {/* prifile */}
          <NavLink
            to="/dashbord"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaUser />
            Profile
          </NavLink>
          {/* analitix */}
          <NavLink
            to="/dashbord/analitics"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <ImStatsDots />
            Analitics
          </NavLink>

          {/* my class */}
          <NavLink
            to="/dashbord/my-enroll-class"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaBook />
            My Classes
          </NavLink>
        </>
      )}
      <>
        <div className=" block w-full py-3 ">
          <div className="border-b-2 block w-full  border-purple-800"></div>
        </div>
        <NavLink
          to="/"
          className={`flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200`}
        >
          <FaHome />
          Home
        </NavLink>
        {/* all-classes */}
        <NavLink
          to="/all-classes"
          className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
        >
          <FaBook />
          All classes
        </NavLink>
        {/* all-classes */}
        {roolChaker !== "admin" && (
          <NavLink
            to="/teach-on-easy"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaSeedling />
            Teach on Easy
          </NavLink>
        )}
        {/*  aboute */}
        <NavLink
          // to="/teach-on-easy"
          className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
        >
          <MdRoundaboutLeft />
          Aboute
        </NavLink>
      </>
    </div>
  );
};

export default DashMenu;
