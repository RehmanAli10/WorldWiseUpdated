import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signinwithGoogle as signinwithGoogleApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignedinwithGoogle() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    data,
    isLoading: isSigningin,
    mutate: signinwithGoogle,
    error,
  } = useMutation({
    mutationFn: signinwithGoogleApi,
    onSuccess: () => {
      toast.success("Signed in successfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      navigate("/app", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isSigningin, signinwithGoogle, error, data };
}
