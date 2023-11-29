 
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSeeProgressId = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: feedBack = [],
    refetch,
    isPending,
  } = useQuery({
    enabled: !!id,
    queryKey: ["see-porgress-item"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/feedback-sigle/${id}`);
      return res.data;
    },
  });

  console.log(feedBack);

  return [feedBack, refetch,isPending];
};

export default useSeeProgressId;
