import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRequestedTeacher = () => {
  // const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["teacher-request-all-admin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/request/teachers`);
      return res.data;
    },
  });

  return [users, refetch];
};

export default useRequestedTeacher;
