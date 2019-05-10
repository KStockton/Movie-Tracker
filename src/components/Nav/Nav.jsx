import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return this.props.user.name === undefined ? (
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <section className="sign-in-container" />
          <li>
            <Link to="/login">Log in or Sign up</Link>
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <section className="sign-in-container" />
          <li>
            <Link to="/user-settings">User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Nav);
