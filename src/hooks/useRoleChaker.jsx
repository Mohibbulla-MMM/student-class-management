import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRoleChaker = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    enabled: loading,
    queryKey: ["user-role-chaker", user && user?.email],
    queryFn: async () => {
      axiosSecure
        .get(`/user-role-chaker/${user?.email}`)
        .then((res) => res.data);
    },
  });

  return data;
};

export default useRoleChaker;
