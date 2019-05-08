import { cleanTopTVShows } from "../Cleaners/CleanTopTVShows";
import { fetchData } from "../Fetches/FetchData";

export const getTopTVShows = (APIkey, pageNumber) => {
  let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIkey}&language=en-US&page=${pageNumber}`;
  return fetchData(url)
    .then(filmdata => cleanTopTVShows(filmdata.results))
};
