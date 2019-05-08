//cleans Top Movies and returns to Main to setState


const cleanTopMovies = (topMovies) =>{
let films = topMovies.results.map(topMovie => {

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

export {cleanTopMovies}
