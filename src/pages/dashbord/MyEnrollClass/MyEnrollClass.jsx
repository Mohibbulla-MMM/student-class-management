import { Helmet } from "react-helmet-async";
import useMyEnroleClass from "../../../hooks/useMyEnroleClass/useMyEnroleClass";
import MyEnrollCard from "./MyEnrollCard";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const MyEnrollClass = () => {
  const [userData] = useMyEnroleClass();
  // console.log(userData);

  return (
    <div>
      <Helmet>
        <title>My Class || EasyteacH</title>
      </Helmet>
      <SectionTitle
        subTitle={`Your total class: ${(userData && userData?.length) || 0}`}
        title={"Your Class"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {userData && userData?.length > 0 ? (
          userData?.map((item) => <MyEnrollCard key={item?._id} item={item} />)
        ) : (
          <div className="w-full h-[50vh] flex flex-col justify-center items-center text-xl font-bold">
            You are not class puches
          </div>
        )}
      </div>
    </div>
  );
};

export default MyEnrollClass;
