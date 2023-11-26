import toast, { Toaster } from "react-hot-toast";
import useAllClasses from "../../../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import myModal from "../Users/myModal";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Allclass = () => {
  const [classes, refetch] = useAllClasses();
  const axiosSecure = useAxiosSecure();

  // handle admin make popUp -------------
  const handleClassApprovePopup = async (item) => {
    // console.log(id);
    const text = "Are you sure you want to this class approve?";
    await myModal(item?.image, item?._id, handleClassApproveConfirm, text);
  };
  // ====================== handleAdminConfirm
  const handleClassApproveConfirm = async (id) => {
    try {
      // console.log(id);
      const res = await axiosSecure.patch(`/classes/approve/${id}`);
      // console.log(res.data);
      if (res.data?.modifiedCount) {
        toast.success("Class approved");
      }
      refetch();
    } catch (err) {
      console.log(err);
      toast.error("Class approved failed");
    }
  };

  // haddle user delete popup ============================
  const handleClassRejectPopup = async (item) => {
    const text = "Are you sure you want to this class reject?";
    await myModal(item?.image, item?._id, handleClassRejectConfirm, text);
  };
  // haddle user delete confirm
  const handleClassRejectConfirm = async (id) => {
    try {
      console.log(id);
      console.log(id);
      // const res = await axiosSecure.patch(`/user-delete/${id}`);
      refetch();
      // if (res.data?.deletedCount) {
      // }
      // console.log(res.data);
      toast.success("Reject success");
    } catch (err) {
      console.log(err);
      toast.error("Reject failed");
    }
  };

  return (
    <div className="bg-purple-50">
      <Helmet>
        <title>All class || EasyteacH</title>
      </Helmet>
      <SectionTitle
        subTitle={`total class: ${classes?.length}`}
        title={"all classe"}
      />
      <div className="overflow-x-auto mt-5 bg-white">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-purple-800  ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Image</th>
              <th>Creator</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {classes &&
              classes?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td className="w-52 block">
                    <figure>
                      <img
                        className="w-52 h-32 object-cover rounded bg-purple-100 block"
                        src={item?.image}
                        alt=""
                      />
                    </figure>
                    <span
                      className=" block text-center
                     font-bold mt-2"
                    >
                      {item?.title}
                    </span>
                  </td>
                  <td>
                    <span className="whitespace-nowrap uppercase font-bold">
                      {item?.name}
                    </span>
                    <br />
                    <span className="whitespace-nowrap">{item?.email}</span>
                  </td>
                  <td>
                    <span className="text-xs block w-52 h-40 overflow-hidden text-justify">
                      {item?.description}
                    </span>
                  </td>
                  {/* status --------- */}
                  <td>
                    <span className="capitalize font-bold">
                      {item?.status || "None"}
                    </span>
                  </td>
                  {/* Action button */}
                  <td>
                    <span className="flex items-center justify-center gap-1 flex-col">
                      <button
                        disabled={item?.role === "admin"}
                        onClick={() => handleClassApprovePopup(item)}
                        className="btn btn-sm bg-purple-800 border-none  rounded    text-white  w-28 "
                      >
                        Approve
                      </button>
                      {/* reject button  */}
                      <button
                        disabled={item?.role === "admin"}
                        onClick={() => handleClassRejectPopup(item)}
                        className="btn btn-sm bg-yellow-600 border-none  rounded    text-white  w-28 "
                      >
                        Reject
                      </button>
                      {/* parmanently delete button  */}
                      <button className="btn btn-sm border-none  rounded   text-white w-28 bg-red-800 ">
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
  );
};

export default Allclass;
