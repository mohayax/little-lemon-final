import React from 'react'
import dining from '../../src/Assets/dining.svg';
import './Reservation.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';





const Reservation = () => {

  const phoneRegExp = 
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validate = Yup.object({
    date: Yup.date()
    .required('Must enter a date'),

    time: Yup.string()
    .required('Must enter time'),

    people: Yup.number()
      .min(1, "Must be atleast one person")
      .required("Must be atleast one person"),

    firstName: Yup.string()
      .min(1, "Must be 1 character or more")
      .required("Must be 1 character or more"),

    lastName: Yup.string()
    .min(1, "Must be 1 character or more")
      .required("Must be 1 character or more"),

    email: Yup.string()
      .email("Email is invalid")
      .required("Email is invalid"),

    phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone number is not valid')
  })

const formik = useFormik({
  initialValues: {
    date: "",
    time: '',
    people: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  },
  
  
  validationSchema: validate,
  onSubmit: (values, {resetForm}) =>{
    resetForm(values = '')
  } 
})



  return (
    <main>
        <div className="form-container">
        
        <div className="col_one">
          <form onSubmit={formik.handleSubmit}>
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
                        name='date'
                        className='text-field'
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        helperText={formik.touched.date && formik.errors.date}
                    />
                    <TextField
                        required
                        id="outlined-number"
                        label="Time"
                        name='time'
                        type="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  error={formik.touched.time && Boolean(formik.errors.time)}
                  helperText={formik.touched.time && formik.errors.time}
                        className='text-field'
                    />
                </div>
                <TextField
                        fullWidth label="No of People"
                        name='people'
                        required
                value={formik.values.people}
                onChange={formik.handleChange}
                error={formik.touched.people && Boolean(formik.errors.people)}
                helperText={formik.touched.people && formik.errors.people}
                        id="fullWidth" type="number" />
                      <div className='inputs'>
                      <TextField
                          required
                          id="outlined-required"
                          name='firstName'
                          label="First Name"
                        className='text-field'
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                      />
                      <TextField
                              required
                          id="outlined-number"
                          name='lastName'
                          label="Last Name"
                        className='text-field'
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                      />
                  </div>
                    <div className='inputs'>
                          <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            name='email'
                            className='text-field'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                          />
                          <TextField
                              required
                              id="outlined-number"
                              label="Phone No"
                              name='phoneNumber'
                              className='text-field'
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                          />
                      </div>
              </Box>
            <Button className='form-btn'
             fullWidth
             type='submit'
             >Book</Button>
          </form>
        </div>

        <div className="col_two">
           
                <img src={dining} alt="table" srcset="" />
            
        </div>
        </div>
      </main>
  )
}


export default Reservation