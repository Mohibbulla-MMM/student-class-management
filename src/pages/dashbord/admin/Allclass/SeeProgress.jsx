import { useParams } from "react-router-dom";
import useSeeProgressId from "../../../../hooks/useSeeProgressId";
import WaitPop from "../../../../shared/WaitPop";
import { Helmet } from "react-helmet-async";

import { MdDelete } from "react-icons/md";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
const SeeProgress = () => {
  const { id } = useParams();
  const [feedBack, , isPending] = useSeeProgressId(id);
  if (isPending) {
    return <WaitPop />;
  }
  console.log(feedBack);
  return (
    <div>
      <Helmet>
        <title>See Progress | EasyteacH </title>
      </Helmet>
      <SectionTitle
        title={"Student FeedBack "}
        subTitle={`Total: ${feedBack && feedBack?.length}`}
      />
      <div className="overflow-x-auto mt-5 bg-white">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden">
          {/* head */}
          <thead className="bg-purple-800  ">
            <tr className="text-white text-base ">
              <th>#</th>
              <th>Image</th>
              <th>Comments</th>
              <th> Name & Email </th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {feedBack &&
              feedBack?.map((item, i) => (
                <tr key={item?._id}>
                  <th>{i + 1}</th>
                  {/* image  */}
                  <td className=" w-32">
                    <figure>
                      <img
                        className="w-20 h-20 rounded-full object-cover   bg-purple-100 block border"
                        src={item?.avater}
                        alt=""
                      />
                    </figure>
                  </td>

                  {/* Name and descriptio   */}
                  <td>
                    <p>
                      <b>What Say</b>
                    </p>
                    <span className="text-xs block w-52 h-28 overflow-hidden text-justify">
                      {item?.description}
                    </span>
                  </td>

                  {/* name adn email  */}
                  <td>
                    <span className="whitespace-nowrap uppercase font-bold">
                      {item?.name}
                    </span>
                    <br />
                    <span className="whitespace-nowrap">{item?.email}</span>
                  </td>

                  {/* titel  */}
                  <td>
                    <b>{item?.title}</b>
                  </td>
                  {/* Action button */}
                  <td>
                    <span className="flex items-center justify-center gap-1 flex-col">
                      <button className="btn text-xl bg-purple-800  border-none    btn-circle   text-white   ">
                        <MdDelete />
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeProgress;
