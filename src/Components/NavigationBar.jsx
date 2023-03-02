import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../src/Assets/logo.png'
import './Navigation.css'
import {
  Link
} from "react-router-dom";

function NavigationBar() {
  return (
    
    <Navbar expand="lg">
        <Container className="container-fluid nav">
        <Navbar.Brand href="#">
          <div className="logo me-5">
                <img src={logo} alt="logo"/>
           </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link className='n-link' to={'/'} href="#action1">Home</Link> */}

            <Link  to={'/'} className="n-link me-5">Home</Link>
            <Nav.Link href="#" className="me-5">About</Nav.Link>
          
            <Nav.Link href="#" className="me-5">
              Menu
            </Nav.Link>

        
              <Link  to={'/booking'} className="n-link me-4">
                Bookings
              </Link>
  
            <Nav.Link href="#" className="me-4" disabled>
              Order Online
            </Nav.Link>
              <Nav.Link href="#" className="m">
                Log In
              </Nav.Link>
        
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;