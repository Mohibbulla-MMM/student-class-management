import { Outlet } from "react-router-dom";
import DashNave from "../shared/dashbord_nav/DashNave/DashNave";
import { Toaster } from "react-hot-toast";

const DashbordLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-1">
      <div className="col-span-12 lg:col-span-3  lg:w-[300px] ">
        <DashNave />
      </div>
      <div className="flex-1 px-3 ">
        <Outlet />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default DashbordLayout;
