import { FaBars } from "react-icons/fa";
import SiteLogo from "../SiteLogo/SiteLogo";
import NavMenu from "./NavMenu";
import Container from "../../utils/Container";
import NavSearchBar from "./NavSearchBar/NavSearchBar";
import UserMenu from "./UserMenu";
const Navbar = () => {
  return (
    <div className="border-b-2">
      {/* site logo */}
      <div>
        <Container>
          <div className="flex gap-2 items-center justify-between h-[60px] ">
            {/* site logo */}
            <div className="hidden lg:block">
              <SiteLogo />
            </div>

            {/* mobaile menu  */}
            <div className="drawer w-6 lg:hidden z-50">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer"
                  className=" drawer-button cursor-pointer text-3xl "
                >
                  <FaBars />
                </label>
              </div>

              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-0   w-60 min-h-full bg-white   gap-1 text-gray-900 z-50">
                  {/* Sidebar content here */}
                  <div className="py-2 border-b mb-2">
                    <SiteLogo />
                  </div>
                  <NavMenu />
                </ul>
              </div>
            </div>

            <div className=" flex-1 items-end justify-center h-[60px] -mb-[2px] hidden lg:flex  ">
              <NavMenu />
            </div>

            <div>
              <div className="flex justify-center items-center">
                <NavSearchBar />
                <UserMenu />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
