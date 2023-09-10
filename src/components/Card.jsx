import React from 'react'

const Card = ({drink}) => {
  return (
    <div className='card' key={drink.id}>
        <img src={drink.image_url} alt="" />
        <div className="details">
            <h3 className="name">{drink.name}</h3>
            <p className="tagline">{drink.tagline}</p>
            <p className="desc">{drink.description}</p>
        </div>
    </div>
  )
}

export default Card;
