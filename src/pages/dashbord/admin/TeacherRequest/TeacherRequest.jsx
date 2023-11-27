import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";
// import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import useRequestedTeacher from "../../../../hooks/useRequestedTeacher";
import myModal from "../Users/myModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const TeacherRequest = () => {
  const [users, refetch] = useRequestedTeacher();
  const axiosSecure = useAxiosSecure();
  // handle admin make popUp -------------
  const handleApprovePop = async (item) => {
    // console.log(id);
    const text = "Do you want to approve his request ?";
    await myModal(item?.image, item?._id, handleApproveConfirm, text);
  };
  // ====================== handleAdminConfirm
  const handleApproveConfirm = async (id) => {
    try {
      console.log(id);
      const res = await axiosSecure.patch(`/request-approved/${id}`);
      if (res.data) {
        console.log(res.data);
        toast.success("Request Approved");
        refetch();
      }
    } catch (err) {
      console.log(err);
      toast.error("Request Approved failed");
    }
  };

  // console.log(users);
  return (
    <div>
      {/*
 //  Name
// ● Images(who apply for teacher)
● experience
● Title
● category
// ● status(pending)
// ● Approved button
// ● Reject button
 */}

      <div>
        <Helmet>
          <title>All Teacher || EasyteacH</title>
        </Helmet>
        <SectionTitle
          subTitle={`total user: ${users?.length}`}
          title={"all teacher"}
        />

        <div className="overflow-x-auto mt-5">
          <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
            {/* head */}
            <thead className="bg-purple-800  ">
              <tr className="text-white text-base ">
                <th>#</th>
                <th>Image</th>
                <th>Name & Email</th>
                <th>Exparience & Profetion(category)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users &&
                users?.map((item, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    {/* user image */}
                    <td className="">
                      <figure>
                        <img
                          className="w-16 h-16 object-cover rounded-full bg-purple-100 block shadow-lg"
                          src={item?.image}
                          alt=""
                        />
                      </figure>
                      <p className="capitalize font-bold text-center">
                        {item?.status}
                      </p>
                    </td>
                    {/* user name and email */}
                    <td>
                      <p className="whitespace-nowrap">
                        {`>`}
                        {item?.name}
                      </p>
                      <p className="whitespace-nowrap">
                        {`>`}
                        {item?.email}
                      </p>
                    </td>
                    {/* user experience  and profetion  */}
                    <td>
                      <p>
                        {`>>`} {item?.experience}
                      </p>
                      <p>
                        {`>>`}
                        {item?.profetion}
                      </p>
                    </td>

                    {/* status */}
                    <td>
                      <span className="capitalize font-bold">
                        {item?.title}
                      </span>
                    </td>
                    {/* all button */}
                    <td>
                      <span className="flex  gap-1 flex-col">
                        <button
                          onClick={() => handleApprovePop(item)}
                          disabled={item?.status === "approved"}
                          className="btn btn-sm bg-purple-800 border-none  rounded    text-white  w-32 "
                        >
                          Approve
                        </button>
                        <button
                          disabled={item?.status === "rejected"}
                          // onClick={() => handleMakeAdmin(item)}
                          className="btn btn-sm bg-purple-800 border-none  rounded    text-white  w-32 "
                        >
                          Reject
                        </button>
                        <button
                          // disabled={item?.status === "rejected"}
                          // onClick={() => handleMakeAdmin(item)}
                          className="btn btn-sm bg-purple-800 border-none  rounded    text-white  w-32 "
                        >
                          Delete
                        </button>
                      </span>
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

export default TeacherRequest;
