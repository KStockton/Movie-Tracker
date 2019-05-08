import { cleanTopMovies } from "../Cleaners/CleanTopMovies";
import { fetchData } from "../Fetches/FetchData";

export const getTopMovies = async (APIkey, pageNumber) => {
  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=${pageNumber}`;
  const data = await fetchData(url);
  console.log(data)
  const result = await cleanTopMovies(data);
  return result;
    // .then(filmdata => cleanTopMovies(filmdata.results))
};
