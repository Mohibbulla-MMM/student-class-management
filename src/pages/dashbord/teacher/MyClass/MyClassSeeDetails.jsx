import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import ProgressSection from "./ProgressSection";

const MyClassSeeDetails = () => {
  const { id } = useParams();

  return (
    <div className="">
      <Helmet>
        <title>My Class Details | EasyteacH</title>
      </Helmet>

      {/* ====== progress section   */}

      <div>
        <ProgressSection id={id} />
      </div>
    </div>
  );
};

export default MyClassSeeDetails;
