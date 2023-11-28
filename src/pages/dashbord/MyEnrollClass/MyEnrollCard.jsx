import { Link } from "react-router-dom";

const MyEnrollCard = ({ item }) => {
  const { title, name, price, description, image } = item || {};
  return (
    <div className="rounded-2xl overflow-hidden   bg-white">
      {/* banner */}
      <div
        style={{ backgroundImage: `url(${image})` }}
        className=" h-[260px] bg-cover  bg-center border-b "
      ></div>
      <div className="p-3 space-y-2 border-b">
        {/* title */}
        <h1 className="text-xl font-semibold hover:text-purple-700  ">
          {title}
        </h1>

        {/* price and teacher name */}
        <div>
          <p className="text-gray-400 font-semibold capitalize">
            Teacher: <span>{name}</span>
          </p>
          <p className="text-gray-400 font-semibold capitalize">
            price: <span>${price}</span>
          </p>
          <p className="text-gray-400 font-semibold capitalize">
            Total Enroll: <span>{item?.totalEnroll || 0}</span>
          </p>
        </div>

        {/* description  */}
        <p className="text-gray-400">
          {description && description?.slice(0, 200)}...
        </p>
      </div>
      {/* button  */}
      <div>
        <Link
          to={`/dashbord/my-enroll-class/${item?._id}`}
          className="btn btn-block rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-200 hover:text-white"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default MyEnrollCard;
