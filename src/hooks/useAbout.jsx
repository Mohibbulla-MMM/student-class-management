import WaitPop from "../shared/WaitPop";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export const useTotalUser = () => {
  const axiosPublic = useAxiosPublic();
  const { data: totlaEnroll = {}, isPending } = useQuery({
    queryKey: ["total-user-get-about"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/counte`);
      return res.data;
    },
  });
  if (isPending) {
    return <WaitPop />;
  }

  return totlaEnroll;
};

export const useTotalClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data: totlaEnroll = {}, isPending } = useQuery({
    queryKey: ["total-class-get"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/total/class`);
      return res.data;
    },
  });
  if (isPending) {
    return <WaitPop />;
  }

  return totlaEnroll;
};

export const useAbout = () => {
  const axiosPublic = useAxiosPublic();
  const { data: totlaEnroll = {}, isPending } = useQuery({
    queryKey: ["all-enroll-get"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/enroll/all`);
      return res.data;
    },
  });
  if (isPending) {
    return <WaitPop />;
  }

  return totlaEnroll;
};
