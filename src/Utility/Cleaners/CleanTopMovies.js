export function cleanTopMovies(topMovies){
let films = topMovies.map(topMovie => {
  return {
    id: topMovie.id,
    title: topMovie.title,
    image: topMovie.backdrop_path,
    overview: topMovie.overview,
    posterpath: topMovie.poster_path
  }
})
return films
}
