import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import saveImage from "../../../../hooks/saveImage";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
const AddClass = () => {
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
      const imageFile = data.image[0];
      const imageRes = await saveImage(imageFile);
      console.log(imageRes);
      if (imageRes.data.display_url) {
        console.log(imageRes);
        const classData = {
          avater: user?.photoURL,
          title: data.title,
          name: data.name,
          category: data.category,
          date: `${date.getDate()}:${
            date.getMonth() + 1
          }:${date.getFullYear()}`,
          totalTime: data.totalTime,
          email: data.email,
          totalEnroll: 0,
          price: parseInt(data.price),
          description: data.description,
          image: imageRes.data.display_url,
          status: "pending",
          progress: "progress",
        };

        await axiosSecure.post("/classes", classData).then((res) => {
          console.log(res.data);
          toast.success("Class Add Success ", {
            id: loadingId,
          });
          setLoading(false);
        });
        console.log(classData);
      }
    } catch (err) {
      toast.error("Class Add Failed ", {
        id: loadingId,
      });
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div>
      <SectionTitle title="Add Class " />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4 mb-4">
          {/* title  */}
          <div>
            <p className="font-semibold">Class Title</p>
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

          {/* category   */}
          <div>
            <p className="font-semibold">Class Category</p>
            <select
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none "
              {...register("category", { required: true })}
              type="text"
              defaultValue={" "}
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
              type="text"
            />
            {errors.totalTime && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

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

          {/* you price   */}
          <div>
            <p className="font-semibold">Class Price</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("price", { required: true })}
              placeholder="Add Price"
              type="number"
            />
            {errors.price && (
              <span className="text-red-600 font-semibold">
                This field is required
              </span>
            )}
          </div>

          {/* image ---------------- */}
          {/* Image upload field */}
          <label className=" relative block cursor-pointer border-dashed border-2   rounded p-1 px-4 text-purple-800 border-purple-800">
            <input
              name="image"
              type="file"
              required
              hidden
              {...register("image")}
              className=" bg-transparent  rounded  outline-none   border-gray-300  text-transparent 
                    focus:border-teal-500  
                    valid:border-teal-500 
                    absolute top-0 left-0 z-10
                     text-md"
            />
            <div className="w-full bg-white  flex  items-center px-6 gap-2">
              <p className="block ">
                <FaUpload />
              </p>
              <p className="block">Add Class Thumbnail</p>
            </div>
          </label>

          {/* you description   */}
          <div>
            <p className="font-semibold">Class Price</p>
            <textarea
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none"
              {...register("description", { required: true })}
              placeholder="Add Description "
              rows={4}
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

export default AddClass;
