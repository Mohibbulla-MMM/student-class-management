import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useTeacherAssignId from "../../../hooks/useTeacherAssignId";
import WaitPop from "../../../shared/WaitPop";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const MyEnrollDetails = () => {
  const [date] = useState(new Date());
  const { user } = useAuth();
  const { id } = useParams();
  const [totalAssignment, , isLoading] = useTeacherAssignId(id);
  console.log(totalAssignment);
  const axiosSecure = useAxiosSecure();
  if (isLoading) {
    return <WaitPop />;
  }
  //   console.log(id);
  // handleAssignSubmit ==============
  const handleAssignSubmit = async (id) => {
    const assignmentData = {
      assignmentId: id,
      email: user?.email,
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
    };
    console.log(assignmentData);
    // console.log(id);
    try {
      //   console.log(id);
      const res = await axiosSecure.post(`/u-assignment`, assignmentData);
      console.log(res.data);
      if (res.data?.insertedId) {
        toast.success("Submit success");
      }
    } catch (err) {
      console.log(err);
      toast.error("Submit failed");
    }
  };

  return (
    <div>
      {/* Title
● Description
● Deadline
● Submit  */}
      <Helmet>
        <title>My enroll class detials | EasyteacH</title>
      </Helmet>

      <SectionTitle title={"My assignment"} subTitle={""} />

      <div className="">
        <div className="overflow-x-auto mt-5">
          <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
            {/* head */}
            <thead className="bg-purple-800  ">
              <tr className="text-white text-base ">
                <th>#</th>
                <th>Title & Description </th>
                <th>Qustion</th>
                <th>Dedline</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {totalAssignment &&
                totalAssignment?.map((item, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>

                    {/* name and description  */}
                    <td>
                      <b className="capitalize">{item?.title}</b>
                      <p className="capitalize">{item?.description}</p>
                    </td>
                    {/* qustion  */}
                    <td>
                      <span className="">{item?.qustion}</span>
                    </td>
                    <td>
                      <b className="whitespace-nowrap">{item?.dedline}</b>
                    </td>
                    {/* pole button */}
                    <td>
                      <button
                        // disabled={item?.role === "admin"}
                        onClick={() => handleAssignSubmit(item?.assignmentId)}
                        className="btn btn-sm bg-purple-800 border-none  rounded    text-white "
                      >
                        Submiit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </div>
  );
};

export default MyEnrollDetails;
