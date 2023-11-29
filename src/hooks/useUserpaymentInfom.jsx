import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
// import WaitPop from "../shared/WaitPop";

const useUserpaymentInfom = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userPaymentInfo = [], isPending } = useQuery({
    enabled: !loading,
    queryKey: ["user-infomation-get", user && user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-p-info/${user && user?.email}`);
      return res.data;
    },
  });
  // if (isPending) {
  //   return <WaitPop />;
  // }

  return [userPaymentInfo, isPending];
};

export default useUserpaymentInfom;
