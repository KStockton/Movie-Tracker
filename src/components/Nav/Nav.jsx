import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import {removeUser} from '../../Actions'

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
            <Link to="/">Home</Link>
          </li>
          <section className="sign-in-container" />
          <li>
            <Link to="/login">Log in/Sign up</Link>
          </li>
        </ul>
      </nav>
    ) : (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <section className="sign-in-container" />
          <li>
            <button onClick = {() => this.props.removeUser({})}>Sign Out</button >
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  removeUser: user => dispatch(removeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
