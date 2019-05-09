import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import UserSignIn from '../UserSignIn/UserSignIn';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      topMovies: [],
      currentPage: 0,
      criteria: "",
      genre: "",
      topTVShows: []
    };
  }

  async componentDidMount() {











  }

  handleFilterClick = criteria => {
    this.setState({ criteria });
  };
  render() {
    return (
      <Router>
        <main>
          <Nav handleFilterClick={this.handleFilterClick} />
          <Route path="/" exact component={Home} />
          <Route path="/search-results" component={SearchResults} />
          <Route path="/user-sign-in" component={UserSignIn} />

          <Footer />
        </main>
      </Router>
    );
  }
}



export default Main
