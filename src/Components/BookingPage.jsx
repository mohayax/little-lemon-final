import React, {useReducer} from 'react'
import dining from '../../src/Assets/dining.svg';
import './Reservation.css'
import BookingForm from './BookingForm';
// import Form from './Form';

const initialState = {times: []};

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "changeTime":
        return {times:
          state.times = action.payload
        }
    default:
      throw new Error('Error occured in changing time');
  }
}


const BookingPage = () => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);
  const updateTimes = (date) => {
    dispatch({ type: 'changeTime', payload: window.fetchAPI(date) });
  };


  


  return (
    <main>
        <div className="form-container">
        
        <div className="col_one">
            <BookingForm
              availableTimes={state.times}
              setAvailableTimes={dispatch}
              updateTimes={updateTimes}
            />
            {/* <Form /> */}
        </div>

        <div className="col_two">
          <img src={dining} alt="table" srcset="" />
        </div>
        </div>
      </main>
  )
}


export default BookingPage