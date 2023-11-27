import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyClass = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: myClass = [], refetch } = useQuery({
    enabled: !loading,
    queryKey: ["my-porfile", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/my-class/${user?.email}`);
      return res.data;
    },
  });
  console.log(myClass);
  return [myClass, refetch];
};

export default useMyClass;
