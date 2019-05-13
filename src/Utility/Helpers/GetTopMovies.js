import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';


export const getTopMovies = async (APIkey, pageNumber) => {
  let url = `${baseUrl}movie/now_playing?api_key=${APIkey}&language=en-US&page=${pageNumber}&region=US`;
  const data = await fetchData(url);
  const result = await cleanTopMovies(data.results);
  return result;
};
