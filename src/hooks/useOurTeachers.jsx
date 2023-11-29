import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useOurTeachers = () => {
  const axiosPublic = useAxiosPublic();
  const { data: teacher = [], refetch } = useQuery({
    queryKey: ["our-all-teachers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users/our-tech");
      return res.data;
    },
  });
  // teacher.filter((item) => {
  //   console.log(item);
  // });

  return [teacher, refetch];
};
export default useOurTeachers;
