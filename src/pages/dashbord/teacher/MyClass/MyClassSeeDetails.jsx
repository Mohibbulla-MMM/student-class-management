import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ProgressSection from "./ProgressSection";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyClassSeeDetails = () => {
  const { id } = useParams();
  
  const axiosSecure = useAxiosSecure();
  // const assigneme create ===============
  const handleAssignmentCreate = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const title = form.title.value;
      const qustion = form.qustion.value;
      const description = form.description.value;
      const dedline = form.dedline.value;
      const assignmentData = {
        assignmentId: id,
        title,
        qustion,
        description,
        dedline,
      };
      const assignRes = await axiosSecure.post("/t-assignment", assignmentData);
      console.log(assignRes);
      if (assignRes.data?.insertedId) {
        toast.success("Success");
        form.reset();
      }
      console.log(assignmentData);
    } catch (err) {
      toast.error("Failed try again ");
      console.log(err);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>My Class Details | EasyteacH</title>
      </Helmet>

      {/* ====== progress section   */}
      <div>
        <ProgressSection id={id} />
      </div>
      {/* create assigment  */}
      <div className="flex justify-center items-center py-8">
        <button
          onClick={() =>
            document.getElementById("my_class_assignmen_create").showModal()
          }
          className="btn rounded border-none bg-purple-700 text-white hover:bg-purple-900"
        >
          Create Assignment
        </button>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_class_assignmen_create" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* my form assign create  */}
          <h3 className="font-bold text-lg mb-4">Assignment Create Form </h3>
          <form onSubmit={handleAssignmentCreate}>
            <div className="space-y-4">
              {/* title  */}
              <input
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none rounded-md"
                placeholder="Enter title"
                name="title"
                type="text"
              />
              {/* qustion  */}
              <input
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none rounded-md"
                placeholder="Enter qustion"
                name="qustion"
                type="text"
              />
              {/* dedline  */}
              <input
                style={{ colorScheme: "white" }}
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none rounded-md"
                placeholder="Enter dedline"
                name="dedline"
                type="date"
              />

              {/* description  */}
              <textarea
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none rounded-md"
                placeholder="Enter description"
                name="description"
                type="text"
              />
              <button className="btn rounded border-none bg-purple-700 text-white hover:bg-purple-900  btn-block">
                Create
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyClassSeeDetails;
