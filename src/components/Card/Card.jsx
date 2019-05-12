import React from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
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
    }
    console.log(userFavInfo)
    // console.log(user.length)
    if(user !== undefined){
      console.log(true)
      const favPath = "users/favorites/new"
     let result =  await postUsers(favPath, "POST", userFavInfo)
      console.log(result)
    }
  }
  
  return (
    <div className="card-wrapper">
      <div
        className="card-background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`
        }}
      >
        <article className="card-info">
          <h4 className="card-title">{title}</h4>
          <span>{vote_average}</span>
          <button>More Info</button>
          <button onClick={() => handleFavorite(id)}>Favorite Btn</button>
        </article>
      </div>

      {/* {vote_average && <p className="Card-info">Overview {vote_average}</p>}
    <img className="Card-no-favorite" src={favorite ? fav : noFav} alt="favorite"/>
    <img src={imagesrc} alt="poster"/>
    <button>Favorite</button> */}
    </div>
  );
};
export default Card;
