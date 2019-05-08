//cleans TV Shows and returns to Main to setState

const cleanTopTVShows = topTV => {
  let cleanShows = topTV.map(shows => {
    return {
      id: shows.id,
      title: shows.original_name,
      image: shows.backdrop_path,
      overview: shows.overview,
      posterpath: shows.poster_path,
      popularity: shows.vote_average
    };
  });
  return cleanShows;
};

export { cleanTopTVShows };
