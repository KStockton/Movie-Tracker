//cleans TV Shows and returns to Main to setState

export function cleanTVShows(topTV) {
  let cleanShows = topTV.map(shows => {
    return {
    id: shows.id,
    title: shows.original_name,
    image: shows.backdrop_path,
    overview: shows.overview,
    posterpath: shows.poster_path
    }
  })
  return cleanShows
  }
  