import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import useAuth from "../useAuth";

const useMyEnroleClass = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["my-enrole-class-id", user && user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/user/${user && user?.email}`);
      return res.data;
      // return res.data?.map((item) => item?.classId);
    },
  });

  console.log(userData);
  return [userData, refetch];
};

export default useMyEnroleClass;
