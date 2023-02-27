import React from 'react'

const Card = ({img, name, price, desc }) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={img} alt="food item" />
        </div>
        <div className="card-body">
            <div className="title">
                <h3 className='name'>{name}</h3>
                <p className='price'>{price}</p>
            </div>
            <p>
                {desc}
            </p>
            <a href="" className='delivery'>Order a delivery</a>
        </div>
    </div>
  )
}

export default Card