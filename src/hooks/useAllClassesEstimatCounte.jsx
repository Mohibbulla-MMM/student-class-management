import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllClassesEstimatCounte = () => {
  const axiosPublic = useAxiosPublic();
  const { data: count = 0, isPending } = useQuery({
    queryKey: ["all-classes-estimate-counter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes-counter");
      return res.data;
    },
  });
  // classes.filter((item) => {
  //   console.log(item);
  // });

  return { count, isPending };
};

export default useAllClassesEstimatCounte;
