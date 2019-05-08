import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from "../../Utility/Config/BaseUrl";
import { APIkey } from "../../Utility/Config/Key";

export const getMovies = async () => {
  const url = `${baseUrl}movie/top_rated/?api_key=${APIkey}`;
  const movieData = await fetchData(url);
  return movieData;
};
