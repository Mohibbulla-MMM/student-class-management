// import { FaCircleDollarToSlot } from "react-icons/fa6";
// import { IoBookSharp } from "react-icons/io5";
// import { FaGift } from "react-icons/fa";
// import { RiFeedbackFill } from "react-icons/ri";
const Analics = () => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 py-4">
      {/* total cost   */}
      <div className="flex gap-2 justify-center items-center p-2 rounded bg-purple-100 shadow-xl ">
        <figure>
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-01.svg"
            alt=""
          />
        </figure>
        <div>
          <h1 className="text-2xl font-bold ">04/09</h1>
          <p className="font-semibold text-sm">All courses</p>
        </div>
      </div>

      {/* total class  */}
      <div className="flex gap-2 justify-center items-center p-2 rounded bg-purple-100 shadow-xl ">
        <figure>
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/icons/teacher-icon-02.svg"
            alt=""
          />
        </figure>
        {/* <span className="text-5xl">
          <IoBookSharp />
        </span> */}
        <div>
          <h1 className="text-2xl font-bold ">20/60</h1>
          <p className="font-semibold text-sm">All Project</p>
        </div>
      </div>

      {/* you feedback  */}
      <div className="flex gap-2 justify-center items-center p-2 rounded bg-purple-100 shadow-xl ">
        <figure>
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/icons/student-icon-01.svg"
            alt=""
          />
        </figure>
        <div>
          <h1 className="text-2xl font-bold ">30/45</h1>
          <p className="font-semibold text-sm">Test Attended </p>
        </div>
      </div>

      {/* bonus  */}
      <div className="flex gap-2 justify-center items-center p-2 rounded bg-purple-100 shadow-xl ">
        <figure>
          <img
            src="https://preschool.dreamstechnologies.com/template/assets/img/icons/student-icon-02.svg"
            alt=""
          />
        </figure>
        <div>
          <h1 className="text-2xl font-bold ">25/45</h1>
          <p className="font-semibold text-sm">Test Passed</p>
        </div>
      </div>
    </div>
  );
};

export default Analics;
