import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import myModal from "./myModal";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/all");
      return res.data;
    },
  });

  // handle admin make popUp -------------
  const handleMakeAdmin = async (item) => {
    // console.log(id);
    const text = "Are you sure you want to make him an admin?";
    await myModal(item?.image, item?._id, handleAdminConfirm, text);
  };
  // ====================== handleAdminConfirm
  const handleAdminConfirm = async (id) => {
    try {
      console.log(id);
      const res = await axiosSecure.patch(`/user-to-admin/${id}`);
      refetch();
      toast.success("Admin make success");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Admin make failed");
    }
  };

  // haddle user delete popup ============================
  const handleUserDeletePopup = async (item) => {
    const text = "Are you sure you want to delete this user?";
    await myModal(item?.image, item?._id, handleUserDeleteConfirm, text);
  };
  // haddle user delete confirm
  const handleUserDeleteConfirm = async (id) => {
    try {
      console.log(id);
      const res = await axiosSecure.patch(`/user-delete/${id}`);
      refetch();
      if (res.data?.deletedCount) {
        toast.success("Remove success");
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Remove failed");
    }
  };

  return (
    <div>
      <Helmet>
        <title>All Users || EasyteacH</title>
      </Helmet>
      <SectionTitle subTitle={`total user: ${users?.length}`} title={'all users'}/>
      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-purple-800  ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users &&
              users?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td>
                    <figure>
                      <img
                        className="w-12 h-12 object-cover rounded-full bg-purple-100 block"
                        src={item?.image}
                        alt=""
                      />
                    </figure>
                  </td>
                  <td>
                    <span className="whitespace-nowrap">{item?.name}</span>
                  </td>
                  <td>
                    <span className="whitespace-nowrap">{item?.email}</span>
                  </td>
                  <td>
                    <span className="capitalize font-bold">
                      {item?.role || "user"}
                    </span>
                  </td>
                  {/* pole button */}
                  <td>
                    <button
                      disabled={item?.role === "admin"}
                      onClick={() => handleMakeAdmin(item)}
                      className="btn btn-sm bg-purple-800 border-none  rounded    text-white  w-32 "
                    >
                      Make Admin
                    </button>
                  </td>

                  {/* delete button */}
                  <td>
                    <button
                      disabled={item?.role === "admin"}
                      onClick={() => handleUserDeletePopup(item)}
                      className="btn btn-sm border-none  rounded   text-white  bg-red-700 "
                    >
                      <RiDeleteBin6Line />
                    </button>
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

export default Users;
