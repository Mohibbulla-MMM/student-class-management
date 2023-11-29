import useUserpaymentInfom from "../../../hooks/useUserpaymentInfom";
import Analics from "./Analics";
import AnaliticsHeader from "./AnaliticsHeader";
import useAuth from "../../../hooks/useAuth";
 
// import doc from "./InvoicePdf";

const Analitics = () => {
  const { user } = useAuth();
  const [data] = useUserpaymentInfom();

  //   console.log(data);
  // doc.text(`<h1>
  // f jdkjffo lksdlkf erif
  // </h1> Hello world!`, 10, 10);
  const handleDownLoad = () => {
    // doc();
  };

  return (
    <div className="">
      <AnaliticsHeader />
      <Analics />
      <div className="flex justify-end ">
        <button
          onClick={handleDownLoad}
          className="btn  rounded bg-purple-800 text-white
         border-none hover:bg-purple-700 "
        >
          Download Your Doc
        </button>
      </div>

      {/* <div>
        {doc.text(
          <div>
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti illum itaque eos, accusantium atque doloremque fugit error eveniet dolorum, reprehenderit aut, voluptas veniam eum optio repudiandae similique architecto aliquid sit.</p>
          </div>
        )}
      </div> */}

      <div className="overflow-x-auto mt-5 mb-6">
        <table className="table rounded-2xl rounded-t-2xl overflow-hidden bg-purple-50">
          {/* head */}
          <thead className="bg-purple-200  ">
            <tr className="text-black text-base ">
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data &&
              data?.map((item, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>

                  <td>
                    <div>
                      <p>
                        <b>Transaction Id: </b>
                        {item?.transactionId}
                      </p>
                      <p>
                        <b>Class Id:</b> {item?.classId}
                      </p>
                    </div>
                  </td>

                  {/* name */}
                  <td>
                    <p>{user && user?.displayName}</p>
                  </td>
                  <td>
                    <p className="whitespace-nowrap">{item?.email}</p>
                  </td>
                  <td>
                    <span className="whitespace-nowrap">${item?.price}</span>
                  </td>
                  <td>
                    <span className="capitalize font-bold">
                      {item?.purchaseDate || "user"}
                    </span>
                  </td>
                  {/* role button */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analitics;
