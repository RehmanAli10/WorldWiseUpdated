import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCity } from "../services/apiCities";

export function useCreateCity() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: creatingCity } = useMutation({
    mutationFn: createCity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
  });
  return { isCreating, creatingCity };
}
