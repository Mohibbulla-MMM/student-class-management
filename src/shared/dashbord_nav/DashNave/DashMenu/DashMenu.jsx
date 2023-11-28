import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { FaBook } from "react-icons/fa6";
import { RiGitPullRequestFill } from "react-icons/ri";
import useRoleChaker from "../../../../hooks/useRoleChaker";

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
          <NavLink
            to="/dashbord"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaUser />
            Profile
          </NavLink>
          <NavLink
            to="/dashbord/my-enroll-class"
            className="flex items-center gap-2 hover:bg-white w-full px-1 font-semibold bg-purple-200"
          >
            <FaBook />
            My Classes
          </NavLink>
        </>
      )}
    </div>
  );
};

export default DashMenu;
