import React from 'react'
import footer from "../../src/Assets/footer.png"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
       
            <div className="f-logo">
                <img src={footer} alt="logo" srcset="" />
            </div>
          <div className='copy'>
            <p>&copy; 2023 Little Lemon Restaurant.</p>
        </div>
       
    </footer>
  )
}

export default Footer