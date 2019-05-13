import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from "../../Utility/Config/BaseUrl";
import { APIkey } from "../../Utility/Config/Key";

export const getMovies = async () => {
  const url = `${baseUrl}movie/latest/?api_key=${APIkey}&adult=false&page=1&language=pt-US`;
  const movieData = await fetchData(url);
  return movieData;
};
