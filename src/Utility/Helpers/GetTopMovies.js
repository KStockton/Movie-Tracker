import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';


export const getTopMovies = async () => {
  let url = `${baseUrl}movie/now_playing?api_key=${process.env.REACT_API_MOVIEDB}&language=en-US&page=1&region=US`;
  const data = await fetchData(url);
  const result = await cleanTopMovies(data.results);
  return result;
};
