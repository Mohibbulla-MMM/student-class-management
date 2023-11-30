import { useAbout, useTotalUser } from "../../hooks/useAbout";
import { FaBook, FaUser } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { MdGroups2 } from "react-icons/md";
import Container from "../../utils/Container";
import useAllClassesEstimatCounte from "../../hooks/useAllClassesEstimatCounte";
const Aboute = () => {
  const totalEnroll = useAbout();
  const totalUser = useTotalUser();
  const totalClass = useAllClassesEstimatCounte();
  // console.log(totalEnroll);
  // console.log(totalUser);
  console.log(totalClass);
  // const []

  return (
    <div>
      <Container>
        <div className="flex flex-col md:flex-row gap-2 items-center justify-center ">
          {/* col one  */}
          <div className="flex-1 flex flex-col justify-center items-center   p-4  space-y-2">
            <SectionTitle title={"About us"} subTitle={""} />

            {/* classes   */}
            <div className="flex gap-2 items-center shadow-lg p-4 rounded-lg w-full max-w-xs">
              <span className="btn btn-circle bg-purple-200 border-none text-purple-800 text-xl">
                <FaBook />
              </span>
              <h1 className="font-bold text-xl">
                Total Classes: {totalClass && totalClass?.count?.counter}
              </h1>
            </div>

            {/* enrollment    */}
            <div className="flex gap-2 items-center shadow-lg p-4 rounded-lg w-full max-w-xs">
              <span className="btn btn-circle bg-purple-200 border-none text-purple-800 text-xl">
                <MdGroups2 />
              </span>
              <h1 className="font-bold text-xl">
                Total Enroll: {totalEnroll?.counter}
              </h1>
            </div>

            {/* user  */}
            <div className="flex gap-2 items-center shadow-lg p-4 rounded-lg w-full max-w-xs">
              <span className="btn btn-circle bg-purple-200 border-none text-purple-800 text-xl">
                <FaUser />
              </span>
              <h1 className="font-bold text-xl">
                Total User: {totalUser?.counter}
              </h1>
            </div>
          </div>

          {/* col two  */}
          <div className="flex-1">
            <figure>
              <img src={"https://i.ibb.co/SXDH0St/20210713153648.gif"} alt="" />
            </figure>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Aboute;
