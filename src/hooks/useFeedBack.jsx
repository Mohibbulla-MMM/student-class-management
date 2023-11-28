import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFeedBack = (id) => {
  const axiosPublic = useAxiosPublic();
  const { data: feedback = [], refetch } = useQuery({
    // enabled: !!id,
    queryKey: ["all-feedback-student"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/feedback`);
      return res.data;
    },
  });

  return [feedback, refetch];
};

export default useFeedBack;
