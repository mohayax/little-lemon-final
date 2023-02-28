import React from 'react'
import dining from '../../src/Assets/dining.svg';
import './Reservation.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


       


const Reservation = () => {
  return (
    <main>
        <div className='heading'>
            <h1>Book a table</h1>
        </div>
        <div className="form-container">
        <div className="col_one">
            <Box
                component="form"
                  //   sx={{
                  //     //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                  //   }}
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                autoComplete="off"
            >
            <div lassName='inputs'>
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
                      <div lassName='inputs'>
                      <TextField
                          required
                          id="outlined-required"
                          label="First Name"
                          defaultValue="Hello World"
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
            <Button variant="contained">Contained</Button>
        </div>

        <div className="col_two">
            <div className="form-img">
                <img src={dining} alt="table image" srcset="" />
            </div>
        </div>
        </div>
      </main>
  )
}


export default Reservation