import { useParams } from "react-router-dom";
import useSinggleClass from "../../../../hooks/useSinggleClass";
import Container from "../../../../utils/Container";

const MyClassSinglePage = () => {
  const { id } = useParams();
  const [data] = useSinggleClass(id);
  console.log(data);

  return (
    <div className="bg-purple-100 py-10">
      <Container>
        {/* class information */}
        <div className=" flex-1 max-w-xl mx-auto space-y-2 bg-white rounded-2xl overflow-hidden shadow-2xl  ">
          <figure>
            <img className="w-full " src={data?.image} alt="" />
          </figure>
          {/* shor information  */}
          <div className="p-3 space-y-2">
            <h1 className="text-xl font-semibold hover:text-purple-700  ">
              {data?.title}
            </h1>
            <div>
              {/* name */}
              <div className="flex gap-2 text-lg font-semibold text-gray-500 border-y">
                <div className="w-32 uppercase">Teacher</div>
                <div className="flex-1 font-normal">{data?.name}</div>
              </div>
              {/* price */}
              <div className="flex gap-2 text-lg font-semibold text-gray-500 border-b">
                <div className="w-32 uppercase">Price</div>
                <div className="flex-1 font-normal">${data?.price}</div>
              </div>
              {/* totalInroll */}
              <div className="flex gap-2 text-lg font-semibold text-gray-500 border-b">
                <div className="w-32 uppercase">total-Enroll</div>
                <div className="flex-1 font-normal">
                  {data?.totalEnroll || 0}
                </div>
              </div>

              {/* postdate */}
              <div className="flex gap-2 text-lg font-semibold text-gray-500 border-b">
                <div className="w-32 uppercase">post-date</div>
                <div className="flex-1 font-normal">{data?.date || 0}</div>
              </div>
              {/* totalTime */}
              <div className="flex gap-2 text-lg font-semibold text-gray-500 border-b">
                <div className="w-32 uppercase">total-Time</div>
                <div className="flex-1 font-normal">{data?.totalTime}</div>
              </div>
            </div>
            {/* description */}
            <p className="text-gray-500">{data.description}</p>
          </div>
          <button
            // onClick={() => document.getElementById("my_modal_3").showModal()}
            className="btn btn-block rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-400 hover:text-white"
          >
            Pay Now
          </button>
        </div>
      </Container>

      {/* payment modal  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {/* <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Payment data={data} />
        </div>
      </dialog> */}
    </div>
  );
};

export default MyClassSinglePage;
