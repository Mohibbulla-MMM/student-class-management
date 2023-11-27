import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTeacherRequest from "../../hooks/useTeacherRequest";

const TeachOnEasy = () => {
  const [userInfo] = useTeacherRequest();
  console.log(userInfo);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [date] = useState(new Date());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle user to  teacher request form
  const onSubmit = async (data) => {
    try {
      const userData = {
        name: data.name,
        email: data.email,
        title: data.title,
        experience: data.experience,
        profetion: data.profetion,
        description: data.description,
        image: user?.photoURL,
        status: "pending",
      };
      const res = await axiosSecure.post("/teachers/teacher", userData);
      if (res.data.insertedId) {
        toast.success("Submit success, please wait for admin review");
        // console.log(res);
      }
    } catch (err) {
      console.log(err);
      toast.error("Submit failed");
    }
    // console.log(userData);
    // console.log(data);
  };

  return (
    <div className="bg-purple-50 py-6">
      <Helmet>
        <title>Teach On Easy | EasyteacH</title>
      </Helmet>
      <SectionTitle title={"teacher request form"} subTitle={`welcom`} />

      <div className="max-w-2xl mx-auto p-4 shadow-xl ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6 mb-4">
            {/* name  */}
            <div>
              <p className="font-semibold">Your Name</p>
              <input
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none "
                {...register("name", { required: true })}
                type="text"
                defaultValue={user && user?.displayName}
                readOnly
                title="Not editable"
              />
              {errors.name && (
                <span className="text-red-600 font-semibold">
                  This field is required
                </span>
              )}
            </div>

            {/* you email   */}
            <div>
              <p className="font-semibold">Your Email</p>
              <input
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
                {...register("email", { required: true })}
                type="email"
                defaultValue={user && user?.email}
                readOnly
                title="Not editable"
              />
              {errors.email && (
                <span className="text-red-600 font-semibold">
                  This field is required
                </span>
              )}
            </div>

            {/* title  */}
            <div>
              <p className="font-semibold">Title/Designation</p>
              <input
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
                placeholder="Enter title"
                {...register("title", { required: true })}
                type="text"
              />
              {errors.title && (
                <span className="text-red-600 font-semibold">
                  This field is required
                </span>
              )}
            </div>

            {/* category Experience  */}
            <div>
              <p className="font-semibold">Your Experience</p>
              <select
                className="border-2 px-4 p-2 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
                {...register("experience", { required: true })}
                type="text"
                defaultValue={" "}
              >
                <option value={" "} disabled>
                  Choose One{" "}
                </option>
                <option value="Beginnner">Beginnner</option>
                <option value="Medium">Medium</option>
                <option value="Experienced">Experienced</option>
              </select>
              {errors.experience && (
                <span className="text-red-600 font-semibold">
                  This field is required
                </span>
              )}
            </div>

            {/* category  profetion  */}
            <div>
              <p className="font-semibold">Your profession</p>
              <select
                className="border-2 px-4 p-2 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
                {...register("profetion", { required: true })}
                type="text"
                defaultValue={" "}
              >
                <option value={" "} disabled>
                  Choose One{" "}
                </option>
                <option value="Digital-Marketion">Digital-Marketion</option>
                <option value="Software-Development">
                  Software-Development
                </option>
                <option value="Web-Development">Web-Development</option>
                <option value="SEO-Expert">SEO-Expert</option>
                <option value="Video-Editing">Video-Editing</option>
                <option value="Graphics-Design">Graphics-Design</option>
                <option value="UI/XI-Design">UI/XI-Design</option>
              </select>
              {errors.profetion && (
                <span className="text-red-600 font-semibold">
                  This field is required
                </span>
              )}
            </div>

            {/* you description   */}
            <div>
              <p className="font-semibold">
                If you have any comments you can write
              </p>
              <textarea
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
                {...register("description")}
                placeholder="Any comments"
                rows={4}
              />
            </div>

            {/* submit button  */}
            <button
              type="submit"
              // value="Submit for review"
              className="btn bg-purple-800 text-white border-none rounded-none btn-block text-xl"
            >
              {loading ? (
                <span className="animate-spin">
                  <ImSpinner9 />
                </span>
              ) : (
                "Submit for review"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* toster  */}
      <div className="z-50">
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default TeachOnEasy;
