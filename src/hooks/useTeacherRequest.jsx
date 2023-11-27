import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTeacherRequest = () => {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: userInfo, refetch } = useQuery({
    enabled: !loading,
    queryKey: ["teacher-request", user && user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/teachers/${user && user?.email}`);
      return res.data;
    },
  });

  return [userInfo, refetch];
};

export default useTeacherRequest;
