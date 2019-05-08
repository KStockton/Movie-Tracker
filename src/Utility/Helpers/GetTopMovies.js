import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';


export const getTopMovies = async (APIkey, pageNumber) => {
  let url = `${baseUrl}movie/top_rated?api_key=${APIkey}&language=en-US&page=${pageNumber}`;
  const data = await fetchData(url);
  const result = await cleanTopMovies(data);
  return result;
};
