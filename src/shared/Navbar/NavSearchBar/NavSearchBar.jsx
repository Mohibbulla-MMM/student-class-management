import { FiSearch } from "react-icons/fi";

const NavSearchBar = () => {
  return (
    <div>
      <span className="btn btn-circle btn-ghost text-xl font-bold bg-white text-purple-800  border border-gray-200 shadow-lg scale-95 mx-1">
        <FiSearch />
      </span>
    </div>
  );
};

export default NavSearchBar;
