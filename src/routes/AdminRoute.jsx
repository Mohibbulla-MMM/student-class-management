import { Navigate, useLocation } from "react-router-dom";
import useRoleChaker from "../hooks/useRoleChaker";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const [admin, isPending] = useRoleChaker();
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading || isPending) {
    return (
      <div className="fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center   ">
        <h1 className="text-4xl font-semibold text-purple-600">Please wait</h1>
      </div>
    );
  }

  if (user && admin === "admin") {
    return children;
  }

  return <Navigate to="/sign-up" state={{ from: location }} replace />;
};

export default AdminRoute;
