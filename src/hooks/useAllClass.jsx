import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClass = () => {
  const axiosSecure = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["all-classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/classes");
      return res.data;
    },
  });
  // classes.filter((item) => {
  //   console.log(item);
  // });

  return [classes, refetch];
};

export default useAllClass;
// find = [{},{},{}] || []
// findOne = {} , {data} , {}
