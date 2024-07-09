import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/apiCities";

export function useCities() {
  const {
    isLoading,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  return { isLoading, cities, error };
}
