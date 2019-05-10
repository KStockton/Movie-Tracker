//cleans Top Movies and returns to Main to setState


const cleanTopMovies = (topMovies) =>{
const films = topMovies.map(topMovie => {

  return {
    id: topMovie.id,
    title: topMovie.title,
    image: topMovie.backdrop_path,
    overview: topMovie.overview,
    posterpath: topMovie.poster_path,
    popularity: topMovie.vote_average,
    favorite: true
  }
})
return films
}

export {cleanTopMovies}
