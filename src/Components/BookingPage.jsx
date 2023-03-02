import React from 'react'
import dining from '../../src/Assets/dining.svg';
import './Reservation.css'
import BookingForm from './BookingForm';





const BookingPage = () => {

  return (
    <main>
        <div className="form-container">
        
        <div className="col_one">
            <BookingForm/>
        </div>

        <div className="col_two">
           
                <img src={dining} alt="table" srcset="" />
            
        </div>
        </div>
      </main>
  )
}


export default BookingPage