import { NavLink } from "react-router-dom";

const FooterMenu = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "font-bold underline " : "  hover:underline"
        }
      >
        Home
      </NavLink>
      {/* about us */}
      <button className="hover:underline">About Us</button>
      {/* all classes */}
      <NavLink
        to="/all-classes"
        className={({ isActive }) =>
          isActive ? "font-bold underline " : "  hover:underline"
        }
      >
        All Classes
      </NavLink>
      {/* Teach on easy */}
      <NavLink
        to="/teach-on-easy"
        className={({ isActive }) =>
          isActive ? "font-bold underline " : "  hover:underline"
        }
      >
        Teach On easy
      </NavLink>
      {/* Teach on easy */}
      <button className="hover:underline">Blog</button>
      {/*  Portfolio on easy */}
      <button className="hover:underline">Portfolio</button>

      <NavLink
        to="/sign-up"
        className={({ isActive }) =>
          isActive ? "font-bold underline " : "  hover:underline"
        }
      >
        sign up
      </NavLink>
    </>
  );
};

export default FooterMenu;
