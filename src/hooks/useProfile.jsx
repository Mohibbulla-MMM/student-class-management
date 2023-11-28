import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useProfile = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userData = {}, refetch } = useQuery({
    enabled: !loading,
    queryKey: ["my-porfile", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/profile/${user?.email}`);
      return res.data;
    },
  });
  
  // console.log(userData);
  return [userData, refetch];
};

export default useProfile;
