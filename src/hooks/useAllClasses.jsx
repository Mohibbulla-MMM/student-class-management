import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllClasses = () => {
  const axiosPublic = useAxiosPublic();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await axiosPublic.get("/classes");
      return res.data;
    },
  });

  return [classes, refetch];
};

export default useAllClasses;
