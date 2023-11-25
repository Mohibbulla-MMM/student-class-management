import { FaGraduationCap } from "react-icons/fa6";

const SectionTitle = () => {
  return (
    <div className="mx-auto my-6 text-center px-6 capitalize flex justify-start items-center flex-col gap-1">
      <p className="italic">SubTitle </p>
      <h1 className="text-3xl font-semibold uppercase">Main Heading</h1>
      <div
        className=" flex justify-center items-center relative border-b w-60 border-purple-800 text-purple-800 text-center my-3 
      "
      >
        <span className=" absolute bg-white px-4 text-xl">
          <FaGraduationCap />
        </span>
      </div>
    </div>
  );
};

export default SectionTitle;
