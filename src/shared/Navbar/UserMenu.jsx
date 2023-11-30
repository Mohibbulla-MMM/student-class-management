import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  const { user, logOut } = useAuth();
  const [menuShow, setMenuShow] = useState(false);
  return (
    <div className="relative">
      <div>
        {user ? (
          <figure onClick={() => setMenuShow(!menuShow)}
          className="relative"
          >
            <img
              src={user?.photoURL}
              alt=""
              className="w-12 h-12 shadow-xl border rounded-full object-cover scale-95 cursor-pointer"
            />
            {/* active dot */}
            <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-2 right-0 border-2"></div>
          </figure>
        ) : (
          ""
        )}
      </div>
      <div
        onClick={() => setMenuShow(!menuShow)}
        className={`${
          menuShow ? "block opacity-100" : "hidden opacity-0"
        }   w-40 shadow-lg border   absolute right-0 duration-300 transition-all flex flex-col z-30 bg-white rounded-lg`}
      >
        <NavLink className="p-1 px-3 hover:bg-purple-200  ">
          {user && user?.displayName}
        </NavLink>
        <NavLink to="/dashbord" className="p-1 px-3 hover:bg-purple-200  ">
          Dashbord
        </NavLink>
        <div
          onClick={() => logOut()}
          className="p-1 px-3 hover:bg-purple-200  "
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
