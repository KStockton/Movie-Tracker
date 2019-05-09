import React from 'react'
import Card from '../Card/Card'


const CardContainer = (props) => {
  const card = props.topMovies.map(movie => {
    return <Card movie={movie} key={movie.id}/>
  })
  return (
    <div className="CardContainer-wrapper"> 
      {card}
    </div>
  )
}

export default CardContainer;