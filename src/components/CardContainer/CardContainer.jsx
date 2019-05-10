import React from 'react'
import Card from '../Card/Card'


const CardContainer = ({topMovies}) => {
  console.log('cardC' , topMovies)
  const mainCard = topMovies.pop()
  const card = topMovies.slice(1).map(movie => {
    return <Card movie={movie} key={movie.id}/>
  })
  return (
    <div className="CardContainer-wrapper"> 
      {card}
    </div>
  )
}

export default CardContainer;