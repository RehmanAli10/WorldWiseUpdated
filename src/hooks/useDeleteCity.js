import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCities } from "../services/apiCities";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCity } = useMutation({
    mutationFn: deleteCities,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
  });

  return { isDeleting, deleteCity };
}
