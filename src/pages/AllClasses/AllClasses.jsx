import { Helmet } from "react-helmet-async";
import useAllClasses from "../../hooks/useAllClasses";
import Container from "../../utils/Container";
import AllClassesCard from "./AllClassesCard";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const AllClasses = () => {
  const [classes] = useAllClasses();
  // console.log(classes);
  return (
    <div className="bg-purple-50 py-4">
      <Helmet>
        <title>All Classes | EasyteacH</title>
      </Helmet>
      <SectionTitle
        title={"All classes "}
        subTitle={`Total Class: ${classes && classes?.length}`}
      />
      {/*  */}
      <Container>
        {/* all classes card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2    lg:grid-cols-3 gap-8">
          {classes &&
            classes?.map((item) => (
              <AllClassesCard key={item?._id} item={item} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default AllClasses;
