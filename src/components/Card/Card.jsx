import React, { Component} from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setUserFavorites } from "../../Actions/";
import PropTypes from 'prop-types';



class Card extends Component {
  constructor(props) {
     super(props);
    this.state = {

    };
  }

  handleFavorite = async () => {
    const { movie, user } = this.props;
    const {
      id,
      overview,
      vote_average,
      release_date,
      poster_path,
      title
    } = movie;
    const userFavInfo = {
      movie_id: id,
      user_id: user.id,
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      release_date: release_date,
      overview: overview
    };
    const uniqueMovie = this.props.user.favorites.filter(
      movie => movie.movie_id === userFavInfo.movie_id
    );
    if (this.props.user !== undefined && uniqueMovie.length === 0) {
      const favPath = "users/favorites/new";
      await postUsers(favPath, "POST", userFavInfo);
      this.setFavorites(user);
    } else {
      const path = `users/${this.props.user.id}/favorites/${
        userFavInfo.movie_id
      }`;
      await postUsers(path, "DELETE", {
        id: this.props.user.id,
        movie_id: userFavInfo.movie_id
      });
      this.setFavorites(user);
    }
  };

  setFavorites = async user => {
    const checkFavePath = `users/${user.id}/favorites`;
    let faves = await postUsers(checkFavePath, "GET");
    this.props.setUserFavorites(faves.data);
  };

  checkFavorite = () => {
    const favoriteIDs = this.getFavoriteIDs();
    if (favoriteIDs.includes(this.props.movie.id)) {
      const displayMovie = { ...this.props.movie, favorited: true };
      return displayMovie;
    } else {
      const displayMovie = { ...this.props.movie };
      return displayMovie;
    }
  };

  getFavoriteIDs = () => {
    return this.props.user.favorites !== undefined
      ? this.props.user.favorites.map(movie => movie.movie_id)
      : [];
  };

  render() {
    const displayMovie = this.checkFavorite();
    const { name } = this.props.user;
    const { poster_path, favorited, id } = displayMovie;
    return (
      <div className="card-wrapper">
        <div
          className="card-background"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`
          }}
        >
          <article className="card-info">
            <section className="card-button-container">
            <NavLink to={{pathname:`/Movie/${id}`, state:{movie: this.props.movie}}} className="card-button" > More Info</NavLink>


              {name === undefined ? (
                <NavLink
                  to="/login"
                  className="card-button"
                  style={{ backgroundColor: favorited ? "green" : "black" }}
                >
                  Add to List
                </NavLink>
              ) : (
                <NavLink
                  to="/"
                  className="card-button"
                  onClick={() => this.handleFavorite()}
                  style={{ backgroundColor: favorited ? "green" : "black" }}
                >
                  Add to List
                </NavLink>
              )}
            </section>
          </article>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  topMovies: state.topMovies
});
const mapDispatchToProps = dispatch => ({
  setUserFavorites: user => dispatch(setUserFavorites(user))
});

Card.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.object,
  topMovies: PropTypes.array,
  setUserFavorites: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
