import './Reservation.css'
import { useEffect, useReducer, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'



const updateTimes = (date) => {
    const times = [
        { time: "12:00 PM", available: true },
        { time: "1:00 PM", available: false },
        { time: "2:00 PM", available: true },
        { time: "3:00 PM", available: true },
        { time: "4:00 PM", available: false },
        { time: "5:00 PM", available: true }
    ];
    // setAvailableTimes(times);
};

const initializeTimes = {
    availableTimes: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "updateTimes":
            const date = action.payload;
            // availableTimes = updateTimes(date);
            return state;
        default:
            return state;
    }
};




const BookingForm = ({updateTimes}) => {
    const naviagte = useNavigate();
    const [data, setData] = useState();
    
    // Date
    const [availableTimes, dispatch] = useReducer(reducer,  initializeTimes);
    
    const handleDateChange = (event) => {
        const date = new Date(event.target.value);
        dispatch({ type: "updateTimes", payload: date });
    };


   
    
    
    // form validation
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validate = Yup.object({
        // date: Yup.date()
        //     .required('Must enter a date'),

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
        onSubmit: ((values, {resetForm}) => {
            // window.submitAPI(JSON.stringify(values, null, 2));
            // alert(data);
            naviagte("/booking-confirm");
            resetForm(values = '');
        })
        
       
    })

  return (
      <form onSubmit={formik.handleSubmit}>
          <h1>Booking</h1>
          <Box
              component="form"
              
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
                      InputLabelProps={{ shrink: true }}
                      type='date'
                      name='date'
                      className='text-field'
                      onChange={handleDateChange}
                    //   error={formik.touched.date && Boolean(formik.errors.date)}
                    //   helperText={formik.touched.date && formik.errors.date}
                      onBlur={formik.handleBlur}
                  />
                  <TextField
                      required
                      id="outlined-number"
                      label="Time"
                      name='time'
                      InputLabelProps={{ shrink: true }}
                      type="time"
                      onBlur={formik.handleBlur}
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
                  InputLabelProps={{ shrink: true }}
                  required
                  onBlur={formik.handleBlur}
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
                      InputLabelProps={{ shrink: true }}
                      className='text-field'
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                      helperText={formik.touched.firstName && formik.errors.firstName}
                  />
                  <TextField
                      required
                      id="outlined-number"
                      name='lastName'
                      InputLabelProps={{ shrink: true }}
                      label="Last Name"
                      className='text-field'
                      onBlur={formik.handleBlur}
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
                      InputLabelProps={{ shrink: true }}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                  />
                  <TextField
                      required
                      id="outlined-number"
                      InputLabelProps={{ shrink: true }}
                      label="Phone No"
                      name='phoneNumber'
                      className='text-field'
                      onBlur={formik.handleBlur}
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                      helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                  />
              </div>
          </Box>
          <Button
            className='form-btn'
            fullWidth
            type='submit'
          >
            Book
           </Button>
      </form>
  )
}

export default BookingForm