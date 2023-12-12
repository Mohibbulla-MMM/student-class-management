import { Link } from "react-router-dom";
import Container from "../../../utils/Container";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const NavSearchItem = ({ data: item }) => {
  //   const [show, setShow] = useState(false);
  const [data, setData] = useState(item);
  useEffect(() => {
    setData(item);
  }, [item]);

  //   console.log(data);
  const handleShow = () => {
    setData([]);
  };

  return (
    <div
      //   style={{
      //     display: "block",
      //   }}
      //   ${show ? "hidden" : "block"}
      className={`
      w-screen h-screen min-h-[300px] fixed  top-16 left-0 overflow-y-auto bg-black bg-opacity-50 z-20 duration-300 pb-60 p-1
      ${data && data?.length > 0 ? "block" : "hidden"} 
      `}
    >
      <button
        onClick={handleShow}
        className="btn btn-circle
     bg-purple-600 hover:bg-purple-700 text-white border-none
     fixed top-20 right-2 z-20 text-xl "
      >
        X
      </button>
      <Container>
        <div className="bg-white sm:p-5 p-3 md:rounded-2xl rounded-xl mt-6 max-w-3xl mx-auto pb-20 ">
          <SectionTitle
            title={"Search item"}
            subTitle={`total item: ${(data && data?.length) || 0}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            {data &&
              data?.map((item) => (
                <div
                  key={item?._id + 2}
                  className="rounded-2xl overflow-hidden   bg-white z-10"
                >
                  {/* banner */}
                  <div
                    style={{ backgroundImage: `url(${item?.image})` }}
                    className=" h-[260px] bg-cover  bg-center border-b "
                  ></div>
                  <div className="p-3 space-y-2 border-b">
                    {/* title */}
                    <h1 className="text-xl font-semibold hover:text-purple-700  ">
                      {item?.itle}
                    </h1>

                    {/* price and teacher name */}
                    <div>
                      <p className="text-gray-400 font-semibold capitalize">
                        Teacher: <span>{name}</span>
                      </p>
                      <p className="text-gray-400 font-semibold capitalize">
                        price: <span>${item?.price}</span>
                      </p>
                      <p className="text-gray-400 font-semibold capitalize">
                        Total Enroll: <span>{item?.totalEnroll || 0}</span>
                      </p>
                    </div>

                    {/* description  */}
                    <p className="text-gray-400">
                      {item?.description && item?.description?.slice(0, 100)}...
                    </p>
                  </div>
                  {/* button  */}
                  <div>
                    <Link
                      // to={`/all-classes/${item?._id}`}
                      className="btn btn-block rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-200 hover:text-white"
                    >
                      Enroll Now{" "}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavSearchItem;
