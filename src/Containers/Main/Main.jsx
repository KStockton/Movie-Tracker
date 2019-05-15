import React from "react";
import Home from "../Home/Home";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


export const Main = () => {
    return (
      <main>
        <Home />
      </main>
    );
}

export const mapStateToProps = state => ({
  user: state.user
});

Main.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps)(Main)
