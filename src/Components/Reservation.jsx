import React from 'react'
import dining from '../../src/Assets/dining.svg';
import './Reservation.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { maxHeight } from '@mui/system';


       


const Reservation = () => {
  return (
    <main>
        <div className="form-container">
        
        <div className="col_one">
          <h1>Booking</h1>
            <Box
                component="form"
                  //   sx={{
                  //     //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                  //   }}
                sx={{
                    // width: 500,
                    maxWidth: '100%'
                }}
                autoComplete="off"
            >
            <div className='inputs'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Date"
                        type='date'
                        className='text-field'
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="Time"
                        type="time"
                        //   InputLabelProps={{
                        //       shrink: true,
                        //   }}
                        className='text-field'
                    />
                </div>
                <TextField
                        fullWidth label="No of People"
                        required
                        id="fullWidth" type="number" />
                      <div className='inputs'>
                      <TextField
                          required
                          id="outlined-required"
                          label="First Name"
                        className='text-field'
                      />
                      <TextField
                              required
                          id="outlined-number"
                          label="Last Name"
                        className='text-field'
                      />
                  </div>
                    <div className='inputs'>
                          <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            className='text-field'
                          />
                          <TextField
                              required
                              id="outlined-number"
                              label="Phone No"
                              type="number"
                              className='text-field'
                          />
                      </div>
              </Box>
            <Button className='form-btn'
             fullWidth
             type='submit'
             >Book</Button>
        </div>

        <div className="col_two">
           
                <img src={dining} alt="table" srcset="" />
            
        </div>
        </div>
      </main>
  )
}


export default Reservation