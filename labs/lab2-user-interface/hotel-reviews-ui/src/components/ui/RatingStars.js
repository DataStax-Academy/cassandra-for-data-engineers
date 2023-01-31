import React from 'react'

const RatingStars = ({ rating }) => {

  return (
    <>
      <span>
        <i style={{color: rating >= 1 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 2 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 3 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 4 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 5 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 6 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 7 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 8 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 9 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
      <span>
        <i style={{color: rating >= 10 ? '#F9AB21' : '#000000'}} className='icon_star'></i>
      </span>
    </>
  )

}

export default RatingStars