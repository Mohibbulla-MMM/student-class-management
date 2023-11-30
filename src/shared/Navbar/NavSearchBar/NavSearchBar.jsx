import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
// import toast,  from "react-hot-toast";
import { FiSearch } from "react-icons/fi";
import NavSearchItem from "./NavSearchItem";

const NavSearchBar = () => {
  const [search, setSerch] = useState(false);
  const [data, setData] = useState();

  const searchRef = useRef();
  // console.log(searchRef.current.value);
  //  handle serch
  const handleSearch = () => {
    setSerch(!search);
  };

  useEffect(() => {
    const text = searchRef.current.value;
    // console.log(text);
    if (text?.length > 2) {
      fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/classes-search?search=${text}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Type minmum 3 character");
    }
    toast.error("Type minmum 3 character");
  }, [search]);
  console.log(data);
  console.log(search);
  return (
    <>
      <div
        className={`${""} w-[200px] md:w-[300px] bg-gray-100 relative flex  items-center h-12 rounded-full p-0 overflow-hidden scale-95`}
      >
        {/* input  */}
        <input
          ref={searchRef}
          className="w-full block p-2 pl-4 border-none outline-none bg-gray-100"
          type="text"
          placeholder="Search"
        />
        {/* search icon  */}
        <button
          onClick={handleSearch}
          className={`  btn btn-circle btn-ghost text-xl font-bold bg-white text-purple-800  border border-gray-200 shadow-lg scale-95 mx-1 -mr-[1px] z-50 `}
        >
          <FiSearch />
        </button>
      </div>

      <NavSearchItem data={data} />
    </>
  );
};

export default NavSearchBar;
