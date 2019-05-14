import React, { Component } from "react";
import Home from "../Home/Home";
import { connect } from "react-redux";


class Main extends Component {
  render() {
    return (
      <main>
        <Home />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});



export default connect(mapStateToProps)(Main)
