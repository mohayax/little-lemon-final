import React from 'react'
import './Main.css'
import { MdDeliveryDining } from "react-icons/md";

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
            <p className='desc'>
                {desc}
            </p>
              <a href="" className='delivery'>
                Order a delivery<span className='me-4'></span>
              <MdDeliveryDining/>
              </a>
        </div>
    </div>
  )
}

export default Card