import React from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
import { NavLink } from 'react-router-dom'

// import noFav from "../../Images/noFav.svg";
// import fav from "../../Images/fav.svg";

const Card = ({ movie, user }) => {
  // console.log(movie);
  const {
    id,
    overview,
    vote_average,
    release_date,
    poster_path,
    backdrop_path,
    title
  } = movie;
  // console.log(movie);
  // const imagesrc = `https://image.tmdb.org/t/p/w500${posterpath}`;

  let handleFavorite = async () => {
        
    const userFavInfo = {
      movie_id: id,
      user_id: user.id,
      title: title,
      poster_path: poster_path,
      vote_average: vote_average,
      release_date: release_date,
      overview: overview
    };
    if (user !== undefined) {
      const favPath = "users/favorites/new";
      let result = await postUsers(favPath, "POST", userFavInfo);
      return result;
    }
  };

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
            <button className="card-button"> More Info</button>
            { user.name === undefined ?  <NavLink to="/login"  className="card-button"> Add to List</NavLink>    : <NavLink className="card-button" onClick={() => handleFavorite()}>
              Add to List
            </NavLink >}
            <span className="rating">Rating: <span className="card-rating">{vote_average}</span></span>
          </section>
          
        </article>
      </div>
    </div>
  );
};
export default Card;
