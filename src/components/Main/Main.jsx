import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Genre from "../Genre/Genre";
import SearchResults from "../SearchResults/SearchResults";
import { fetchData } from '../../Utility/Fetches/FetchData';
import { cleanTopMovies } from '../../Utility/Cleaners/CleanTopMovies';
import { APIkey } from '../../Utility/Config/Key'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      topMovies: [],
      currentPage: 0,
                criteria : '',
          genre : ''
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

    handleClick = (criteria) => {
        this.setState({ criteria})
    }
    
  render() {
    console.log(this.state.topMovies)
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
