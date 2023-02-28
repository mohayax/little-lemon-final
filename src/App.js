import './App.css';
import NavigationBar from './Components/NavigationBar';
import Reservation from './Components/Reservation';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes, Route, Link
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
        <Route path="/reservation" element={<Reservation />} />
        </Routes>

        <div>
          <Footer />
        </div>
    </Router>

      
    </>
  );
}

export default App;