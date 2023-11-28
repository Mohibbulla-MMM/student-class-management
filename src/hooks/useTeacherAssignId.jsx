import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTeacherAssignId = (id) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: assignmetn = [],
    refetch,
    isLoading,
  } = useQuery({
    enabled: !!id,
    queryKey: ["teahcer-assignmet-get", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/t-assignment/${id}`);
      return res.data;
    },
  });

  return [assignmetn, refetch, isLoading];
};

export default useTeacherAssignId;
