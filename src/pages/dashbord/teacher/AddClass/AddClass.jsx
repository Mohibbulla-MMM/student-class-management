import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";

const AddClass = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  // handle add class
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle />
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
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

          {/* name  */}
          <div>
            <p className="font-semibold">Your Name</p>
            <input
              className="border-2 px-4 p-1 bg-white text-black text-lg w-full focus:border-purple-600  outline-none "
              {...register("name", { required: true })}
              type="text"
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
          <input
            type="submit"
            value="Add Class"
            className="btn bg-purple-800 text-white border-none rounded-none btn-block text-xl"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
