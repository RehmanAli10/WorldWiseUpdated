import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";

function ProtectedRoutes({ children }) {
  const { isAuthenticated, isLoading } = useUser();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate, isLoading]
  );

  if (isAuthenticated) return <>{children}</>;
}

export default ProtectedRoutes;
