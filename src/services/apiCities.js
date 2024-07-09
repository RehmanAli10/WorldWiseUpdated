import supabase from "./supabase";

export async function getCities() {
  let { data, error } = await supabase.from("cities").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createCity(city) {
  const { error } = await supabase.from("cities").insert(city).select();

  let currentCity = city;

  if (error) {
    throw new Error(error.message);
  }

  return currentCity;
}

export async function deleteCities(id) {
  const { error } = await supabase.from("cities").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
