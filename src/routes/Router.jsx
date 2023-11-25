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
        path: "teach-on-easy",
        element: <TeachOnEasy />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  // dasdbord layout ---------------
  {
    path: "/dashbord",
    element: <DashbordLayout />,
    // errorElement:
    children: [
      {
        // path: "/",
        index: true,
        element: <Profile />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-class",
        element: <MyClass />,
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
