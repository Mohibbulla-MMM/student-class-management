import { FaCalendarDays, FaUsers } from "react-icons/fa6";
import useSinggleClass from "../../../../hooks/useSinggleClass";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import WaitPop from "../../../../shared/WaitPop";
import { CgNotes } from "react-icons/cg";
import useTeacherAssignId from "../../../../hooks/useTeacherAssignId";
import useStudentAssignment from "../../../../hooks/useStudentAssignment";

const ProgressSection = ({ id }) => {
  const [data, , isLoading] = useSinggleClass(id);
  const [totalAssignment] = useTeacherAssignId(id);
  const [studentAssignment] = useStudentAssignment(id);
  //   console.log(totalAssignment);
  console.log(studentAssignment);
  //   console.log(data);
  if (isLoading) {
    return <WaitPop />;
  }
  return (
    <div>
      <SectionTitle title={"progres section"} subTitle={"class"} />
      <div className="grid grid-cols-2 sm:grid-cols-3   gap-6">
        {/* col 1 total enrolment  */}
        <div className="flex flex-col justify-center items-center gap-1 p-3 rounded-lg shadow-xl shadow-gray-300 border py-8 px-4">
          <span className="text-8xl">
            <FaUsers />
          </span>
          {/* title  */}
          <h1 className="  font-bold">
            Totla Enroll: {data?.totalEnroll || 0}
          </h1>
        </div>

        {/* col 1 total enrolment  */}
        <div className="flex flex-col justify-center items-center gap-1 p-3 rounded-lg shadow-xl shadow-gray-300 border py-8 px-4">
          <span className="text-8xl">
            <CgNotes />
          </span>
          {/* title  */}
          <h1 className="  font-bold">
            Totla Assignment: {totalAssignment?.length || 0}
          </h1>
        </div>

        {/* col 1 total enrolment  */}
        <div className="flex flex-col justify-center items-center gap-1 p-3 rounded-lg shadow-xl shadow-gray-300 border py-8 px-4">
          <span className="text-8xl">
            <FaCalendarDays />
          </span>
          {/* title  */}
          <h1 className="  font-bold">
            Submited Assignment:{" "}
            {(studentAssignment && studentAssignment?.length) || 0}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
// assignment-category-7 problem-point:8