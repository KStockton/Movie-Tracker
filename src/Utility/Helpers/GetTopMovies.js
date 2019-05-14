import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';


export const getTopMovies = async (APIkey) => {
  let url = `${baseUrl}movie/now_playing?api_key=${APIkey}&language=en-US&page=1&region=US`;
  const data = await fetchData(url);
  const result = await cleanTopMovies(data.results);
  return result;
};
