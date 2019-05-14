import React from "react";
import Home from "../Home/Home";
import { connect } from "react-redux";
import PropTypes from 'prop-types';


const Main = () => {
    return (
      <main>
        <Home />
      </main>
    );
}

const mapStateToProps = state => ({
  user: state.user
});

Main.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps)(Main)
