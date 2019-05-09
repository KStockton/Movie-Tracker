import React from 'react'

const  Card = ({movie})  => {
  console.log(movie)
  const {id, title, overview, image, favorite } = movie
  const imagesrc = `https://image.tmdb.org/t/p/w500${image}`
  let style = {
      backgroundImage: `url(${imagesrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
  }

  return (
    <div className="Card-wrapper" style={style}>
    {title && <p>Title: {title}</p>}
    {overview && <p>Overview {overview}</p>}
    </div>
  )
}
export default Card