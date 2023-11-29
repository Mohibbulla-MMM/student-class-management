import { Helmet } from "react-helmet-async";
import Container from "../../utils/Container";
import AllClassesCard from "./AllClassesCard";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import useAllClassesEstimatCounte from "../../hooks/useAllClassesEstimatCounte";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import WaitPop from "../../shared/WaitPop";
// import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllClasses = () => {
  const { loading } = useAuth();
  const { count, isPending } = useAllClassesEstimatCounte();
  const { counter } = count;
  const [classes, setClasses] = useState([]);
  // console.log(counter);

  // console.log(classes);
  const [parPageValue, setParPageValue] = useState(10);
  const [currentPage, setCurrentpage] = useState(0);
  console.log(currentPage);
  const totalPage = Math.ceil(counter / parPageValue);
  // console.log(totalPage);

  useEffect(() => {
    fetch(
      `http://localhost:7000/classes/all?page=${currentPage}&size=${parPageValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClasses(data);
      });
  }, [currentPage, parPageValue]);
  // }, []);
  if (loading || isPending) {
    return <WaitPop />;
  }
  const pages = [...Array(totalPage).keys()];
  // console.log(pages);

  // //   ----------- handleNextPage------------
  const handleNextPage = () => {
    if (0 < currentPage) {
      setCurrentpage(currentPage - 1);
    }
  };
  // //   ----------- handlePreviusPage ------------
  const handlePreviusPage = () => {
    console.log({ currentPage });
    if (totalPage - 1 > currentPage) {
      setCurrentpage(currentPage + 1);
    }
  };
  // // handle par-page-item
  const handleParpageItem = (e) => {
    const value = parseFloat(e.target.value);
    setCurrentpage(0);
    // console.log(value);
    setParPageValue(value);
  };
  // // console.log(classes);
  return (
    <div className="bg-purple-50 py-4">
      <Helmet>
        <title>All Classes | EasyteacH</title>
      </Helmet>
      <SectionTitle
        title={"All classes "}
        subTitle={`Total Class: ${classes && classes?.length}`}
      />
      {/*  */}
      {/* all classes card  */}
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2    lg:grid-cols-3 gap-8">
          {classes &&
            classes?.map((item) => (
              <AllClassesCard key={item?._id} item={item} />
            ))}
        </div>
      </Container>
      <Container>
        <div className="flex p-4 shadow-xl mt-8 rounded-md justify-between items-center bg-purple-200">
          <p className="pagination-title font-semibold ">
           Shoing: {0}-{parPageValue}/{counter}
          </p>
          <div className="flex gap-1 items-center">
            <button
              className="btn btn-sm   bg-white border-none text-black hover:text-white "
              onClick={handleNextPage}
            >
              {"< Next "}
            </button>
            {pages?.map((page) => (
              <button
                onClick={() => setCurrentpage(page)}
                key={page}
                className={
                  currentPage === page
                    ? "btn btn-sm btn-circle border-none text-white"
                    : "btn btn-sm btn-circle bg-white border-none text-black hover:text-white "
                }
              >
                {page + 1}
              </button>
            ))}
            <button
              className="btn btn-sm bg-white border-none text-black hover:text-white "
              onClick={handlePreviusPage}
            >
              {"Prev > "}
            </button>
            <select
              className="btn btn-sm bg-white border-none text-black hover:text-white border-0 focus:border-none"
              onChange={handleParpageItem}
              name="par-page-item"
              value={parPageValue}
              id=""
            >
              <option value="5">5</option>
              <option value="10">{10}</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllClasses;
