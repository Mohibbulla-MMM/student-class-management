import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRoleChaker = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: info = "user" } = useQuery({
    enabled: !loading,
    queryKey: ["user-role-chaker", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-role-chaker/${user?.email}`);
      return res.data?.role || 'user';
    },
  });

  return info;
};

export default useRoleChaker;
