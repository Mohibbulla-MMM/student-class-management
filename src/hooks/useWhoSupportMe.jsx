// https://raw.githubusercontent.com/Mohibbulla-MMM/all-json-file/main/who-support-me.json

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useWhoSupportMe = () => {
  const {
    data: classes = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["who-suppport-me-national-brand"],
    queryFn: async () => {
      const res = await axios.get(
        "https://raw.githubusercontent.com/Mohibbulla-MMM/all-json-file/main/who-support-me.json"
      );
      return res.data;
    },
  });

  return [classes, refetch, isPending];
};

export default useWhoSupportMe;
