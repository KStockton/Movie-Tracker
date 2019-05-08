import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import { APIkey } from "../../Utility/Config/Key";
import { getTopMovies } from "../../Utility/Helpers/GetTopMovies";
import { getTopTVShows } from "../../Utility/Helpers/GetTopTVShows";
import { connect } from "react-redux";
import {addTopMovies, addTopTVShows} from "../../Actions/index";
import { get } from 'http';
import { getMovies } from '../../Utility/Helpers/GetMovies';

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
    const { currentPage, topMovies, topTVShows } = this.state;
    let incrementedPage = currentPage + 1;
    let movies = await getTopMovies(APIkey, incrementedPage);
    this.props.addTopMovies(movies)
    let topShows = await getTopTVShows(APIkey, incrementedPage);
    this.props.addTopTVShows(topShows)
    this.setState({currentPage: incrementedPage})
    // selects a random number - can be used to pick from either array above and display banner
    // const randomNumber = Math.floor(Math.random() * 20) + 1;
  }

  handleFilterClick = criteria => {
    const { currentPage } = this.state;
    this.setState({ criteria });
    getMovies(currentPage, criteria);
  };
  render() {
   
    console.log(this.state)
    return (
      <Router>
        <main>
          <Nav handleFilterClick={this.handleFilterClick} />
          <Route path="/" exact component={Home} />
          <Route path="/search-results" component={SearchResults} />
          <Footer />
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  topMovies : state.topMovies
});

const mapDispatchToProps = dispatch => ({
  addTopMovies : movies => dispatch(addTopMovies(movies)),
  addTopTVShows: topShows => dispatch(addTopTVShows(topShows))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
