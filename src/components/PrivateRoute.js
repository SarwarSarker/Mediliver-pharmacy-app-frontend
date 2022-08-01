import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ user, children }) => {
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
