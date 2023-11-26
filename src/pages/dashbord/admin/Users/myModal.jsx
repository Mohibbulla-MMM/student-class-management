import toast from "react-hot-toast";

const myModal = (img, id, fn, text) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible
          ? "animate-enter duration-150"
          : "animate-leave opacity-0 duration-100"
      } min-w-[110vw] h-[110vh]   transition-all duration-200  bg-black bg-opacity-75 absolute -top-5 -left-5  p-0 m-0  mx-auto flex flex-col justify-center items-center`}
    >
      <div className="flex flex-col justify-center items-center max-w-xs min-w-[300px] bg-white p-4 rounded-xl gap-2">
        <figure>
          <img className="h-32 w-32 rounded-full" src={img} alt="" />
        </figure>
        <h1 className="text-xl font-semibold text-center">{text}</h1>
        <div
          onClick={() => toast.dismiss(t.id)}
          className="flex items-center w-full block gap-3"
        >
          <button
            onClick={() => fn(id)}
            className="btn flex-1   rounded text-purple-800 hover:text-purple-800 border-2 border-purple-800 hover:border-purple-800    text-white bg-purple-800 hover:bg-white "
          >
            Confirm
          </button>
          <button className="btn btn-outline  flex-1 rounded text-purple-800 border-2 border-purple-800 hover:border-purple-800   hover:text-white hover:bg-purple-800">
            Cancel
          </button>
        </div>
      </div>
    </div>
  ));
};

export default myModal;
