import React from "react";
import noFav from "../../Images/noFav.svg";
import fav from "../../Images/fav.svg";

const Card = ({ movie }) => {
  console.log(movie);
  const {
    id,
    overview,
    popularity,
    favorite,
    posterpath,
    image,
    title
  } = movie;
  console.log(movie);
  const imagesrc = `https://image.tmdb.org/t/p/w500${posterpath}`;

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
