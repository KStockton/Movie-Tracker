import React from "react";
import Main from "../Main/Main.jsx";
import { Switch, Route } from "react-router-dom";
import UserSignIn from "../UserSignIn/UserSignIn";
import { connect } from "react-redux";
import Nav from '../Nav/Nav'
import {Movie} from '../../Components/Movie/Movie';


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={UserSignIn} />
          <Route path="/movie/:id" component={Movie}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
