import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/Home";
import Genre from "../Genre/Genre";
import SearchResults from "../SearchResults/SearchResults";

class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          criteria : '',
          genre : ''
         
      }
    }
    handleClick = (criteria) => {
        this.setState({ criteria})
    }
    
  render() {
    return (
      <Router>
        <main>
          <Nav handleClick = {this.handleClick}/>
          <Route path="/" exact component={Home} />
          <Route path="/search-results" component={SearchResults} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default Main;
