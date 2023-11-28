import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import WaitPop from "../shared/WaitPop";

const useMyClass = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: myClass = [],
    refetch,
    isLoading,
    isError,
  } = useQuery({
    enabled: !loading,
    queryKey: ["my-porfile", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes/my-class/${user?.email}`);
      return res.data;
    },
  });
  if ((isLoading || loading, isError)) {
    return <WaitPop />;
  }
  //   console.log(myClass);
  return [myClass, refetch, isLoading];
};

export default useMyClass;
