import './App.css';
import NavigationBar from './Components/NavigationBar';
import BookingPage from './Components/BookingPage';
import Footer from './Components/Footer';
import Home from './Components/Home';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"


function App() {

  return (
    <>
    <Router>
      <div>
        <NavigationBar />
      </div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking-confirm" element={<ConfirmedBooking />} />
        </Routes>

        <div>
          <Footer />
        </div>
    </Router>

      
    </>
  );
}

export default App;