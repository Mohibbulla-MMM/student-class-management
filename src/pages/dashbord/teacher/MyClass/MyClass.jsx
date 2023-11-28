import { Helmet } from "react-helmet-async";
 
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";
import MyClassCard from "./MyClassCard";
import WaitPop from "../../../../shared/WaitPop";
import useMyClass from "../../../../hooks/useMyClass";

const MyClass = () => {
  const [myClasses, refetch, isLoading] = useMyClass()
  // console.log(myClasses);
  if (isLoading) {
    return <WaitPop />;
  }
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
          myClasses?.length > 0 &&
          myClasses?.map((item) => (
            <MyClassCard key={item?._id} item={item} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default MyClass;
