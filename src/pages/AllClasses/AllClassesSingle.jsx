import { Link, useLoaderData } from "react-router-dom";
import Container from "../../utils/Container";
import { MdDescription } from "react-icons/md";

const AllClassesSingle = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-purple-100 py-10">
      <Container>
        <div className="max-w-xl mx-auto space-y-2 bg-white rounded-2xl overflow-hidden shadow-2xl">
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
                <div className="w-32 uppercase">totalInroll</div>
                <div className="flex-1 font-normal">
                  {data?.totalInroll || 0}
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
          <Link className="btn btn-block rounded-none text-lg btn-ghost hover:bg-purple-800 bg-purple-400 hover:text-white">
            Pay Now
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AllClassesSingle;
