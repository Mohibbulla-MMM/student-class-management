import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useStudentAssignment = (id) => {
  const axiosSecure = useAxiosSecure();
  const { data: sutdentAssignment =[] } = useQuery({
    queryKey: ["student-assignment-get"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/u-assignment/${id}`);
      return res.data;
    },
  });

  return [sutdentAssignment];
};
export default useStudentAssignment;
