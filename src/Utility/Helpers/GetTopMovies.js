import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';


export const getTopMovies = async () => {
  //process.env.REACT_APP_KEY is returning undefined even after hot reload refresh
  // reseting cache in browser didnt help
  // will use raw key for portfolio purposes
  // const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_KEYDB}&language=en-US&page=1&region=US`;
  const url = `${baseUrl}movie/now_playing?api_key=785a3c3d07da1dae72a4bab7ea099971&language=en-US&page=1&region=US`;
  const data = await fetchData(url);
  const result = await cleanTopMovies(data.results);
  return result;
};
