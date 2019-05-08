import { cleanTopTVShows } from "../Cleaners/CleanTopTVShows";
import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';

export const getTopTVShows = (APIkey, pageNumber) => {
  let url = `${baseUrl}tv/top_rated?api_key=${APIkey}&language=en-US&page=${pageNumber}`;
  return fetchData(url)
    .then(filmdata => cleanTopTVShows(filmdata.results))
};
