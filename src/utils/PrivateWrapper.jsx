import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./validation";

function PrivateWrapper() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateWrapper;
