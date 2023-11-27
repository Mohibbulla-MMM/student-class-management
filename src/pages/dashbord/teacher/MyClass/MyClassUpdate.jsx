import { useParams } from "react-router-dom";
import useSinggleClass from "../../../../hooks/useSinggleClass";

import WaitPop from "../../../../shared/WaitPop";
import { ImSpinner9 } from "react-icons/im";
import toast, { Toaster } from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";

const MyClassUpdate = () => {
  const { id } = useParams();
  const [getData, , isLoading] = useSinggleClass(id);
  // console.log(isLoading);
  console.log(getData);

  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [date] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // handle add class
  const onSubmit = async (data) => {
    const loadingId = toast.loading("please wait");
    setLoading(true);
    try {
      // console.log(imageRes);
      const classData = {
        title: data.title,
        name: data.name,
        category: data.category,
        date: `${date.getDate()}:${date.getMonth() + 1}:${date.getFullYear()}`,
        totalTime: data.totalTime,
        email: data.email,
        totalEnroll: parseInt(data.totalEnroll),
        price: parseInt(data.price),
        description: data.description,
        image: data.image,
        avater: user?.photoURL,
        status: "pending",
        progress: "progress",
      };
      console.log(classData);
      await axiosSecure
        .put(`/classes/${getData?._id}`, classData)
        .then((res) => {
          console.log(res.data);
          toast.success("Class Update Success ", {
            id: loadingId,
          });
          setLoading(false);
        });
      console.log(classData);
    } catch (err) {
      toast.error("Class Update Failed ", {
        id: loadingId,
      });
      setLoading(false);
      console.log(err);
    }
  };
  if (isLoading) {
    return <WaitPop />;
  }
  return (
    <div className="bg-purple-50 py-8 sm:px-5">
      <div
        style={{ backgroundImage: `url(${getData?.image})` }}
        className="flex justify-center items-center py-12  mb-6 px-5 bg-cover  bg-center border-b bg-blend-overlay bg-white duration-300 hover:bg-black bg-opacity-60 hover:bg-opacity-50 hover:text-white "
      >
        <SectionTitle title="Update Class " subTitle={"your class"} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6 mb-4 p-4">
          {/* title  */}
          <div>
            <p className="font-semibold">Class Title</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
              placeholder="Enter title"
              {...register("title", { required: true })}
              type="text"
              defaultValue={getData?.title}
            />
            {errors.title && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* category   */}
          <div>
            <p className="font-semibold">Class Category</p>
            <select
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
              {...register("category", { required: true })}
              type="text"
              defaultValue={getData?.category}
            >
              <option value={" "} disabled>
                Choose One{" "}
              </option>
              <option value="JAVASCRIPT">JAVASCRIPT</option>
              <option value="PYTHON">PYTHON</option>
              <option value="HTML">HTML</option>
              <option value="JAVA">JAVA</option>
              <option value="PHP">PHP</option>
              <option value="CSS">CSS</option>
              <option value="c++">c++</option>
              <option value="c#">c#</option>
              <option value="c">c</option>
            </select>
            {errors.title && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* totalTime  */}
          <div>
            <p className="font-semibold">Total Time</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
              placeholder="Enter title"
              {...register("totalTime", { required: true })}
              defaultValue={getData?.totalTime}
              type="text"
            />
            {errors.totalTime && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/*user name  */}
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

          {/* user email   */}
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

          {/* class price   */}
          <div>
            <p className="font-semibold">Class Price</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("price", { required: true })}
              placeholder="Add Price"
              type="number"
              defaultValue={getData?.price}
            />
            {errors.price && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>
          {/* totalEnroll     */}
          <div>
            <p className="font-semibold">Total enroll</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("totalEnroll", { required: true })}
              title="Not ditable"
              placeholder="Add Price"
              type="number"
              readOnly
              defaultValue={getData?.totalEnroll}
            />
            {errors.totalEnroll && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* class image/ thumbnail   */}
          <div>
            <p className="font-semibold">Photo URL</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("image", { required: true })}
              placeholder="Add Price"
              type="text"
              defaultValue={getData?.image}
            />
            {errors.image && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/*  class description   */}
          <div>
            <p className="font-semibold">Class summary/description</p>
            <textarea
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("description", { required: true })}
              placeholder="Add Description "
              rows={10}
              defaultValue={getData?.description}
            />
            {errors.description && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* submit button  */}
          <button
            type="submit"
            value="Add Class"
            className="btn bg-purple-800 text-white border-none rounded-none btn-block text-xl"
          >
            {loading ? (
              <span className="animate-spin">
                <ImSpinner9 />
              </span>
            ) : (
              "Add Class"
            )}
          </button>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
};

export default MyClassUpdate;
