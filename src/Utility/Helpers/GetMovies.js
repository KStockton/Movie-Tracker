import { fetchData } from "../Fetches/FetchData";
import { baseUrl } from '../../Utility/Config/BaseUrl';
import { APIkey} from '../../Utility/Config/Key';

export const getMovies = async ( pageNumber, filterCriteria) => {
  const url = `${baseUrl}discover/${filterCriteria}/?api_key=${APIkey}&language=en-US&page=${pageNumber}`;
  const movieData =  await fetchData(url)
  console.log(movieData)
};
