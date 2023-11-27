import { Helmet } from "react-helmet-async";
import useMyClass from "../../../../hooks/useMyClass";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import MyClassCard from "./MyClassCard";

const MyClass = () => {
  const [myClasses, refetch, isLoading] = useMyClass();
  // console.log(myClasses);
  return (
    <div className="">
      <Helmet>
        <title>My Class | EasyteacH</title>
      </Helmet>
      <SectionTitle
        title={"my all class"}
        subTitle={`Total Class: ${myClasses && myClasses?.length}`}
      />
      {/* my class card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {myClasses &&
          myClasses?.map((item) => (
            <MyClassCard key={item?._id} item={item} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default MyClass;
