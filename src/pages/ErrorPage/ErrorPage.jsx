import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="flex  flex-col justify-center items-center gap-4 w-full min-h-screen bg-white p-4">
      <figure>
        <img src="https://i.ibb.co/xgR8RnL/images.png" alt="" />
      </figure>
      <h1 className="text-3xl text-gray-700 font-semibold  ">
        This URL not valid
      </h1>
      <p className="text-xl ">No content here</p>
      <div className="flex gap-2 items-center ">
        <Link
          to={"/"}
          className="btn btn-accent rounded bg-[#68E1FD] hover:text-white w-32 text-lg outline-none border-none"
        >
          Go Home
        </Link>
        <button
          onClick={handleNavigate}
          className="btn btn-accent rounded bg-[#68E1FD] hover:text-white w-32 text-lg outline-none border-none"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
