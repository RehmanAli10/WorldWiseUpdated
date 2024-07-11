import { useQuery } from "@tanstack/react-query";
import { getCities } from "../services/apiCities";
import { useUser } from "./useUser";

export function useCities() {
  const { user } = useUser();

  const {
    isLoading,
    data: cities,
    error,
  } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  let filteredData = cities?.filter((city) => city.userId === user?.id);

  return { isLoading, cities: filteredData, error };
}
