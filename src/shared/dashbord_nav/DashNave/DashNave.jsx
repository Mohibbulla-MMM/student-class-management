import { FaBars } from "react-icons/fa";
import SiteLogo from "../../SiteLogo/SiteLogo";
import DashMenu from "./DashMenu/DashMenu";
import DashBottomMenu from "./DashMenu/DashBottomMenu";

const DashNave = () => {
  return (
    <div
      style={{
        zIndex: 999,
      }}
      className="z-50"
    >
      {/* site bar logo  */}

      <div className="w-[250px] xl:w-[300px] hidden lg:block z-50">
        <div className=" fixed top-0 left-0 hidden overflow-y-auto  lg:flex flex-col gap-1 items-start justify-between min-h-[200px] h-screen w-[250px] xl:w-[300px]  p-2  bg-purple-100  ">
          <div className="w-full ">
            <div className="flex justify-start">
              <SiteLogo />
            </div>
            <DashMenu />
          </div>
          <div className="w-full">
            <DashBottomMenu />
          </div>
        </div>
      </div>

      {/*---------------- mobaile menu ---------------- */}
      <div className="drawer w-6 lg:hidden block z-50  ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pb-12">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className=" drawer-button cursor-pointer text-xl    shadow-lg btn text-black border-none   btn-circle border-gray-200 m-2 fixed bg-white bg-opacity-60 hover:bg-opacity-100 hover:bg-purple-100 hover:shadow-xl "
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
          <ul className="p-0  w-60 min-h-full bg-purple-100   gap-1   z-50">
            {/* Sidebar content here */}
            {/* <NavMenu /> */}
            <div className="flex flex-col gap-1 items-start justify-between  min-h-[400px] h-screen p-2 ">
              <div className="w-full flex-1">
                <div className="flex justify-start mb-3">
                  <SiteLogo />
                </div>
                <DashMenu />
              </div>
              <div className="w-full">
                <DashBottomMenu />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashNave;
