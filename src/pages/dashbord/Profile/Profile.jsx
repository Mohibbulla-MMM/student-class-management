import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useProfile from "../../../hooks/useProfile";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const [userInfo, refetch] = useProfile();
  console.log(userInfo);
  const [edit, setEdit] = useState(false);
  const axiosSecure = useAxiosSecure();
  // console.log(userInfo);
  // const axiosSecure = useAxiosSecure
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const form = e.target;
    const phone = form.phone.value;
    if (phone?.length <= 8 || phone?.length > 20) {
      return toast.error("Phone number not valie ");
    }

    const res = await axiosSecure.patch(
      `/user/profile-update/${userInfo?._id}`,
      { phone }
    );

    console.log(res.data);
    if (res.data?.modifiedCount) {
      console.log(res.data);
      toast.success("Success");
      refetch();
    }
    setEdit(false);
    // console.log(phone);
  };
  // const handle
  return (
    <div>
      <Helmet>
        <title>My Profile | EasyteacH</title>
      </Helmet>
      <SectionTitle
        subTitle={`Welcome ${user && user?.displayName}`}
        title={"Your information "}
      />
      {/* user content  */}
      <form onSubmit={handleUpdateProfile}>
        <div className="bg-purple-100 rounded-xl p-6 max-w-xl mx-auto mb-6">
          <div className="flex  flex-col gap-6 py-8 ">
            {/* user image */}
            <div className=" space-y-3 ">
              <figure>
                <img
                  className="w-28  h-28 object-cover rounded-full"
                  src={userInfo && userInfo?.image}
                  alt=""
                />
              </figure>
              <div
                disabled={edit}
                onClick={() => setEdit(true)}
                className="btn rounded border-none bg-purple-900 text-white hover:bg-purple-700 hover"
              >
                Edit Profile{" "}
              </div>
            </div>

            {/* others info  */}
            <div className="flex-1 space-y-4 font-semibold">
              {/* id */}
              <div>
                <p>
                  Your Id:{" "}
                  {edit && (
                    <span className="text-gray-500">
                      (Id cannot be changed)
                    </span>
                  )}
                </p>
                <input
                  readOnly
                  className={`font-bold bg-purple-100 text-lg outline-none  ${
                    edit &&
                    "border-2 border-purple-700 block w-full px-3 p-1 rounded bg-white"
                  }`}
                  defaultValue={userInfo._id}
                />
              </div>
              {/* id */}
              <div>
                <p>
                  Role:{" "}
                  {edit && (
                    <span className="text-gray-500">
                      (Role cannot be changed)
                    </span>
                  )}{" "}
                </p>
                <input
                  readOnly
                  className={`font-bold bg-purple-100 text-lg outline-none  ${
                    edit &&
                    "border-2 border-purple-700 block w-full px-3 p-1 rounded bg-white"
                  }`}
                  defaultValue={userInfo && userInfo?.role}
                />
              </div>

              {/* name */}
              <div>
                <p>
                  Full Name:{" "}
                  {edit && (
                    <span className="text-gray-500">
                      (Name cannot be changed)
                    </span>
                  )}
                </p>
                <input
                  name="name"
                  // {edit}
                  readOnly
                  className={`font-bold bg-purple-100 text-lg outline-none  ${
                    edit &&
                    "border-2 border-purple-700 block w-full px-3 p-1 rounded bg-white"
                  }`}
                  defaultValue={userInfo && userInfo?.name}
                />
              </div>

              {/* email */}
              <div>
                <p>
                  Email:{" "}
                  {edit && (
                    <span className="text-gray-500">
                      (Email cannot be changed)
                    </span>
                  )}
                </p>
                <input
                  className={`font-bold bg-purple-100 text-lg outline-none  ${
                    edit &&
                    "border-2 border-purple-700 block w-full px-3 p-1 rounded bg-white"
                  }`}
                  readOnly
                  defaultValue={userInfo && userInfo?.email}
                />
              </div>

              {/* Phone number */}
              <div>
                <p>Phone Number: </p>
                <input
                  className={`font-bold bg-purple-100 text-lg outline-none  ${
                    edit &&
                    "border-2 border-purple-700 block w-full px-3 p-1 rounded bg-white"
                  }`}
                  readOnly={!edit}
                  name="phone"
                  type="number"
                  defaultValue={(userInfo && userInfo?.phone) || ""}
                  placeholder={
                    (userInfo && userInfo?.phone) || "You didn't add"
                  }
                />
              </div>
              {edit && (
                <button
                  disabled={!edit}
                  className="btn rounded border-none bg-purple-900 text-white hover:bg-purple-700 hover"
                >
                  Update
                </button>
              )}
            </div>
          </div>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Profile;
