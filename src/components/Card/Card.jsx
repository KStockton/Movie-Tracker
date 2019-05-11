import React from "react";
import { postUsers } from "../../Utility/Fetches/PostUsers";
// import noFav from "../../Images/noFav.svg";
// import fav from "../../Images/fav.svg";

const Card = ({ movie, user }) => {
  // console.log(movie);
  const {
    id,
    overview,
    popularity,
    releaseDate,
    posterpath,
    image,
    title
  } = movie;
  // console.log(movie);
  // const imagesrc = `https://image.tmdb.org/t/p/w500${posterpath}`;
  
  let handleFavorite = async () => {
    const userFavInfo = {
      movie_id: id, 
      user_id: user.id, 
      title: title, 
      poster_path: posterpath,
      vote_average: popularity,
      release_date: releaseDate,
      overview: overview 
    }
    console.log(userFavInfo)

    // console.log(user.length)
    if(user !== undefined){
      console.log(true)
      const favPath = "users/favorites/new"
      await postUsers(favPath, "POST", userFavInfo)
    }
  }
  
  return (
    <div className="card-wrapper">
      <div
        className="card-background"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${image})`
        }}
      >
        <article className="card-info">
          <h4 className="card-title">{title}</h4>
          <span>{popularity}</span>
          <button>More Info</button>
          <button onClick={() => handleFavorite(id)}>Favorite Btn</button>
        </article>
      </div>

      {/* {popularity && <p className="Card-info">Overview {popularity}</p>}
    <img className="Card-no-favorite" src={favorite ? fav : noFav} alt="favorite"/>
    <img src={imagesrc} alt="poster"/>
    <button>Favorite</button> */}
    </div>
  );
};
export default Card;
