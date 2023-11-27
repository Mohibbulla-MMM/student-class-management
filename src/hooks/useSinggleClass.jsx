import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSinggleClass = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: classes = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["single-class"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/classes/${id}`);
      return res.data;
    },
  });

  return [classes, refetch, isLoading];
};

export default useSinggleClass;
