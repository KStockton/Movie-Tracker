import React, { Component } from 'react';
import { fetchData } from '../../Utility/Fetches/FetchData';
import { cleanTopMovies } from '../../Utility/Cleaners/CleanTopMovies';
import { APIkey } from '../../Utility/Config/Key'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      topMovies: [],
      currentPage: 0
    }
  }

componentDidMount(){
  const { currentPage, topMovies} = this.state
  let incrementedPage = currentPage + 1;
this.setState({currentPage: incrementedPage}, () => {

  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=${incrementedPage}`
  fetchData(url)
  .then(topFilms => {
      console.log(topFilms)

})
  
})
}

    // console.log(topMovies.total_pages))
    // cleanTopMovies(topMovies))


  render() {
    console.log(this.state.topMovies)
    return (
      <div>
        <h1>Hello</h1>

        
      </div>
    )
  }
}

export default Main
