import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Genre from "../Genre/Genre";
import SearchResults from "../SearchResults/SearchResults";
import { fetchData } from '../../Utility/Fetches/FetchData';
import { cleanTopMovies } from '../../Utility/Cleaners/CleanTopMovies';
import { cleanTVShows } from '../../Utility/Cleaners/CleanTVShows';
import { APIkey } from '../../Utility/Config/Key'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      topMovies: [],
      currentPage: 0,
      criteria : '',
      genre : '',
      topTVShows: [],
    }
  }

componentDidMount(){
  
  const { currentPage, topMovies, topTVShows} = this.state
  let incrementedPage = currentPage + 1;
  this.setState({currentPage: incrementedPage}, () => {

  let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=${incrementedPage}`
  fetchData(url)
    .then(filmdata => cleanTopMovies(filmdata.results))
    .then(topMovies => this.setState({topMovies}))
  })

  let url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${APIkey}&language=en-US&page=${incrementedPage}`
  fetchData(url)
  .then(tvData => cleanTVShows(tvData.results))
  .then(topTVShows => this.setState({topTVShows}, () => {
  }))
  
  // selects a random number - can be used to pick from either array above and display banner
  const randomNumber = Math.floor(Math.random() * 20) + 1

}


    handleClick = (criteria) => {
        this.setState({ criteria})
    }
    
  render() {
   
    console.log(this.state)
    return (
      <Router>
        <main>
          <Nav handleClick = {this.handleClick}/>
          <Route path="/" exact component={Home} />
          <Route path="/genre" component={Genre} />
          <Route path="/search-results" component={SearchResults} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default Main;
