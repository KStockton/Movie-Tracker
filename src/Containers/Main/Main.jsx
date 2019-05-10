import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Home from "../Home/Home";
import { connect } from "react-redux";


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
