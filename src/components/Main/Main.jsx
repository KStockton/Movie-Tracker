import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SearchResults from "../SearchResults/SearchResults";
import { connect } from "react-redux";
import UserSignIn from "../UserSignIn/UserSignIn";
import UserSettings from "../UserSettings/UserSettings";
import { Route, Redirect } from "react-router-dom";


class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {}


  handleFilterClick = criteria => {
    this.setState({ criteria });
  };
  render() {
    console.log(this.props.user.name);
    console.log("rendering");
    return (
      <main>
        <Nav
          handleFilterClick={this.handleFilterClick}
          handleUserClick={this.handleUserClick}
        />
        <Home />
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps)(Main)
