import useMyEnroleClass from "../../../hooks/useMyEnroleClass/useMyEnroleClass";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";

const MyEnrollClass = () => {
  // const [myClass, setMyClass] = useState([]);
  // const axiosSecure = useAxiosSecure();
  const [userData] = useMyEnroleClass();
  console.log(userData);
  // // const my = { userData: };
  // // const myObj = { name: "mohibbula" };

  // useEffect(() => {
    
   
  // }, [userData, axiosSecure]);
  // console.log(userData);
  // // console.log(myClass);


  return (
    <div>
      <p>My Enroll class</p>
    </div>
  );
};

export default MyEnrollClass;
