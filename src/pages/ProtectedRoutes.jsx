import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoutes;
