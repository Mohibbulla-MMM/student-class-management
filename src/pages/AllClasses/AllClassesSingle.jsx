import { useLoaderData } from "react-router-dom";

const AllClassesSingle = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <p>single classes </p>
    </div>
  );
};

export default AllClassesSingle;
