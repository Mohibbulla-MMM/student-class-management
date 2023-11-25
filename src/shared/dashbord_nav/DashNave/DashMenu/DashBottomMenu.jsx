import useAuth from "../../../../hooks/useAuth";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import toast from "react-hot-toast";
const DashBottomMenu = () => {
  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logged Out");
    });
  };
  return (
    <div className="space-y-1 w-full">
      <button
        onClick={handleLogOut}
        className="flex items-center gap-2 hover:bg-white w-full px-1"
      >
        <BiLogOut />
        Log Out
      </button>
      {/* setting  */}
      <button
        title="Beta"
        className="flex items-center gap-2 hover:bg-white w-full px-1"
      >
        <IoMdSettings />
        Setting
      </button>
    </div>
  );
};

export default DashBottomMenu;
