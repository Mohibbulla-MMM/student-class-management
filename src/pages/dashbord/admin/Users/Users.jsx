import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto mt-5">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-purple-800  ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Image</th>
              <th>Email</th>
              <th>Role</th>
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
                      <img className="w-12 h-12 object-cover rounded-full bg-purple-100 block" src={item?.image} alt="" />
                    </figure>
                  </td>

                  <td>{item?.email}</td>
                  {/* pole button */}
                  <td>
                    {item.role === "admin" ? (
                      <span
                        className="font-bold text-sm rounded  btn btn-sm 
                       bg-red-700  hover:bg-red-700  border-none text-white w-[80px]"
                      >
                        Admin
                      </span>
                    ) : (
                      <span
                        // onClick={() => handleMakeAdmin(item)}
                        className=" btn btn-sm border-none  rounded text-xl cursor-pointer   bg-purple-600 text-white w-[80px]"
                      >
                        {" "}
                        dd
                        {/* <RiGroupFilll /> */}
                      </span>
                    )}
                  </td>

                  {/* delete button */}
                  <td>
                    <span
                      // onClick={() => handleUserDeletePopup(item?._id)}
                      className="btn btn-sm border-none  rounded text-xl   text-white  bg-red-700 w-[80px]"
                    >
                      <RiDeleteBin6Line />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
