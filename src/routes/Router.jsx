import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AllClasses from "../pages/AllClasses/AllClasses";
import TeachOnEasy from "../pages/TeachOnEasy/TeachOnEasy";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import DashbordLayout from "../layout/DashbordLayout";
import Profile from "../pages/dashbord/Profile/Profile";
import AddClass from "../pages/dashbord/teacher/AddClass/AddClass";
import TeacherRequest from "../pages/dashbord/admin/TeacherRequest/TeacherRequest";
import Users from "../pages/dashbord/admin/Users/Users";
import Allclass from "../pages/dashbord/admin/Allclass/Allclass";
import MyClass from "../pages/dashbord/teacher/MyClass/MyClass";
import AllClassesSingle from "../pages/AllClasses/AllClassesSingle";

import axios from "axios";
import Payment from "../pages/Payment";
import PrivateRoute from "./PrivateRoute";
import MyEnrollClass from "../pages/dashbord/MyEnrollClass/MyEnrollClass";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-classes",
        element: <AllClasses />,
      },
      {
        path: "all-classes/:id",
        element: (
          <PrivateRoute>
            <AllClassesSingle />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await axios
            .get(`${import.meta.env.VITE_SERVER_BASE_URL}/classes/${params.id}`)
            .then((res) => res.data),
      },
      {
        path: "teach-on-easy",
        element: (
          <PrivateRoute>
            <TeachOnEasy />
          </PrivateRoute>
        ),
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  // dasdbord layout ---------------
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <DashbordLayout />
      </PrivateRoute>
    ),
    // errorElement:
    children: [
      {
        // path: "/",
        index: true,
        element: <Profile />,
      },
      {
        path: "my-enroll-class",
        element: (
          <PrivateRoute>
            <MyEnrollClass />
          </PrivateRoute>
        ),
      },
      {
        path: "add-class",
        element: (
          <PrivateRoute>
            <AddClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-class",
        element: (
          <PrivateRoute>
            <MyClass />
          </PrivateRoute>
        ),
      },
      {
        path: "my-class/:id",
        element: (
          <PrivateRoute>
            <MyClass />
          </PrivateRoute>
        ),
      },
      {
        path: "teacher-request",
        element: <TeacherRequest />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "all-class",
        element: <Allclass />,
      },
    ],
  },
]);

export default Router;
