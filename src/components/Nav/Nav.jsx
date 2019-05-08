import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
      const {handleFilterClick} = this.props;
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><button name="tv" onClick ={(e) => handleFilterClick(e.target.name)}>TV Shows</button></li>
          <li><button name="movie" onClick ={(e) => handleFilterClick(e.target.name)}>Movies</button></li>
          <li><button name="upcoming" onClick ={(e) => handleFilterClick(e.target.name)}>Upcoming</button></li>
          <li><button>My List</button></li>
        </ul>
        <ul>
          <li><input className="nav-search-btn" type="text"></input></li>
          <li><Link to="/user-forms">Search Results</Link></li>
          <li><Link to="/user-forms">User</Link></li>

        </ul>
      </nav>
    );
  }
}

export default Nav;
