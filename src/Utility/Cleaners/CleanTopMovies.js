//cleans Top Movies and returns to Main to setState


const cleanTopMovies = (topMovies) =>{
const films = topMovies.map(topMovie => {

  return {
    id: topMovie.id,
    title: topMovie.title,
    backdrop_path: topMovie.backdrop_path,
    overview: topMovie.overview,
    poster_path: topMovie.poster_path,
    vote_average: topMovie.vote_average,
    release_date: topMovie.release_date
  }
})
return films
}

export {cleanTopMovies}
