import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // Do somthing before request is sent
  axiosSecure.interceptors.request.use(async function (confing) {
    const token = localStorage.getItem("jwt-token");
    // console.log("axios secure token send: ", token);
    confing.headers.Authorization = `Bearer ${token}`;
    return confing;
  }),
    function (errr) {
      console.log(errr);
      return Promise.reject(errr);
    };

  // do something response data
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          navigate("/sign-in");
          logOut();
        }
        console.log(error);
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
