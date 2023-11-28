import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import ReactStars from "react-rating-stars-component";
// import React from "react";
// import { render } from "react-dom";
const FeedbackModa = ({ id, title }) => {
  const [reating, setRating] = useState(0);
  const { user } = useAuth();
  const [date] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  // console.log(title);
  ////////////////////////////////////////////////
  // const assigneme create ===============
  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const description = form.description.value;

      const feedBackData = {
        assignmentId: id,
        email: user?.email,
        name: user?.displayName,
        avater: user?.photoURL,
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
        description,
        ratign: reating,
        title: title,
      };
      const assignRes = await axiosSecure.post("/feedback", feedBackData);
      console.log(assignRes.data);
      if (assignRes.data?.insertedId) {
        toast.success("Success");
        form.reset();
      }
      console.log(feedBackData);
    } catch (err) {
      toast.error("Failed try again ");
      console.log(err);
    }
  };
  // handle rating  ===============
  const ratingChanged = (newRating) => {
    // console.log(newRating);
    setRating(newRating);
  };
  return (
    <div>
      <dialog id="my_class_feedback_btn" className="modal">
        <div className="modal-box bg-white text-gray-800">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* my form assign create  */}
          <h3 className="font-bold text-xl mb-4">
            Can share your views and experiences{" "}
          </h3>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="space-y-4">
              {/* description  */}
              <textarea
                className="border-2 px-4 p-1 bg-white text-black text-lg w-full  focus:border-purple-600  outline-none rounded-md"
                placeholder="Type hare"
                name="description"
                type="text"
                required
              />
              {/* react reatin component  */}
              <div className=" flex  items-center gap-1 text-2xl font-bold ">
                <span className="text-base ">Raging:</span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={36}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </div>
              {/* submit button  */}
              <button className="btn rounded border-none bg-purple-700 text-white hover:bg-purple-900  btn-block">
                Send
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FeedbackModa;
