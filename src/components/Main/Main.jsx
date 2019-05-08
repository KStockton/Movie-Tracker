import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import { APIkey } from "../../Utility/Config/Key";
import { getTopMovies } from "../../Utility/Helpers/GetTopMovies";
import { getTopTVShows } from "../../Utility/Helpers/GetTopTVShows";
import { connect } from "react-redux";

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
    let data = await getTopMovies(APIkey, incrementedPage);
    console.log(data);
    // selects a random number - can be used to pick from either array above and display banner
    // const randomNumber = Math.floor(Math.random() * 20) + 1;
  }

  handleClick = criteria => {
    this.setState({ criteria });
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <main>
          <Nav handleClick={this.handleClick} />
          <Route path="/" exact component={Home} />
          <Route path="/search-results" component={SearchResults} />
          <Footer />
        </main>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
