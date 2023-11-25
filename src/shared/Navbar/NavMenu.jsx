import { NavLink } from "react-router-dom";

import "./navmenu.css";
import useAuth from "../../hooks/useAuth";
const NavMenu = () => {
  const { user } = useAuth();
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-nav-menu" : "nav-menu"
        }
      >
        Home
      </NavLink>
      {/* all classes */}
      <NavLink
        to="/all-classes"
        className={({ isActive }) =>
          isActive ? "active-nav-menu" : "nav-menu"
        }
      >
        All Classes
      </NavLink>
      {/* Teach on easy */}
      <NavLink
        to="/teach-on-easy"
        className={({ isActive }) =>
          isActive ? "active-nav-menu" : "nav-menu"
        }
      >
        Teach On easy
      </NavLink>
      {user ? (
        ""
      ) : (
        <NavLink
          to="/sign-up"
          className={({ isActive }) =>
            isActive ? "active-nav-menu" : "nav-menu"
          }
        >
          sign up
        </NavLink>
      )}
      <NavLink
        to="/sign-in"
        className={({ isActive }) =>
          isActive ? "active-nav-menu" : "nav-menu"
        }
      >
        sign in
      </NavLink>
    </>
  );
};

export default NavMenu;
