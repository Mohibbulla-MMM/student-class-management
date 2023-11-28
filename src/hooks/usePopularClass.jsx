import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePopularClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data: popularClass = [], refetch,isPending } = useQuery({
    queryKey: ["my-porfile"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classes/popular`);
      return res.data;
    },
  });
  //   console.log(popularClass);
  return [popularClass, refetch ,isPending];
};

export default usePopularClass;
