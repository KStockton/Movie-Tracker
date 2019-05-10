import React from 'react'
import noFav from '../../Images/noFav.svg'
import fav from '../../Images/fav.svg'

const  Card = ({movie})  => {
  console.log(movie)
  const {id,overview, popularity, favorite, posterpath } = movie
  console.log(movie)
  const imagesrc = `https://image.tmdb.org/t/p/w500${posterpath}`

  return (
    <div className="Card-wrapper" >
    {popularity && <p className="Card-info">Overview {popularity}</p>}
    <img className="Card-no-favorite" src={favorite ? fav : noFav} alt="favorite"/>
    <img src={imagesrc} alt="poster"/>
    <button>Favorite</button>
    </div>
  )
}
export default Card