import React, { Component } from "react";
import Footer from "../../Components/Footer/Footer";
import Home from "../Home/Home";
import { connect } from "react-redux";


class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {}

  render() {
    return (
      <main>
        <Home />
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});



export default connect(mapStateToProps)(Main)
