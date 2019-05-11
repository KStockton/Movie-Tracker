//cleans TV Shows and returns to Main to setState

const cleanTopTVShows = topTV => {
  let cleanShows = topTV.map(shows => {
    return {
      id: shows.id,
      title: shows.name,
      backdrop_path: shows.backdrop_path,
      overview: shows.overview,
      posterpath: shows.poster_path,
      vote_average: shows.vote_average,
      favorite: false
    };
  });
  return cleanShows;
};

export { cleanTopTVShows };
