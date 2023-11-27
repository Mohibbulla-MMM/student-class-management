import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import myModal from "../../admin/Users/myModal";

const MyClassCard = ({ item, refetch }) => {
  const { title, name, price, description, image } = item || {};
  const axiosSecure = useAxiosSecure();
  //   useSinggleClass pop =================
  const handleDeletePop = async () => {
    const text = "Are you sure you want to delete this class ?";
    myModal(image, item?._id, handleDeleteConfirm, text);
  };
  const handleDeleteConfirm = async (id) => {
    console.log(id);
    try {
      const delRes = await axiosSecure.delete(`/classes/${id}`);
      console.log(delRes.data);
      if (delRes.data?.deletedCount) {
        toast.success("Class Update Success ", {});
        refetch();
      }
    } catch (err) {
      console.log(err);
      toast.error("Class Update Success ", {});
    }
  };

  return (
    <div className="rounded-xl overflow-hidden   bg-purple-50">
      {/* 
● Title
● name(not editable)
● email(not editable)
● Price
● Description
● Image
● status(initially pending)
● Update button
● Delete button
● See details 
*/}
      {/* banner */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" h-[250px] bg-cover  bg-center border-b bg-blend-overlay bg-gray-400 duration-300 hover:bg-gray-500 "
      ></div>
      <div className="p-3 space-y-2 border-b">
        {/* title */}
        <h1 className="text-xl font-semibold hover:text-purple-700 ">
          {title}
        </h1>

        {/* price and teacher name */}
        <div className="text-gray-500 font-bold capitalize">
          <p>
            Name: <span>{name}</span>
          </p>
          <p>
            Email: <span>{item?.email}</span>
          </p>
          <p>
            price: <span>${price}</span>
          </p>
          <p>
            Status: <span>{item?.status}</span>
          </p>
          <p>
            Total Enroll: <span>{item?.totalEnroll || 0}</span>
          </p>
        </div>

        {/* description  */}
        <p className="text-gray-400">
          {description && description?.slice(0, 200)}...
        </p>
      </div>
      {/* button  */}
      <div className="flex items-center gap-1 ">
        <Link
          to={`/dashbord/my-class/${item?._id}`}
          className="btn flex-1 rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-200 hover:text-white"
        >
          Update
        </Link>
        <Link
          disabled={item?.status === "pending"}
          to={`/dashbord/my-class-details/${item?._id}`}
          className="btn flex-1 rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-200 hover:text-white"
        >
          See details
        </Link>
        <Link
          onClick={handleDeletePop}
          className="btn flex-1 rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-200 hover:text-white"
        >
          Delete
        </Link>
      </div>
    </div>
  );
};

export default MyClassCard;
