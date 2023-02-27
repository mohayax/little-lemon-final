import React from 'react'
import './Main.css'
import Card from './Card'
import bruchetta from '../../src/Assets/bruchetta.svg'
import greekSalad from '../../src/Assets/greeksalad.jpg'
import lemondessert from '../../src/Assets/lemondessert.jpg'

const Main = () => {
    // const cardsObj = [
    //     {
    //         img: `${bruchetta}`,
    //         name: "Bruchetta",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis.",
    //     },
    //     {
    //         img: `${greekSalad}`,
    //         name: "Bruchetta",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis.",
    //     },
    //     {
    //         img: `${lemondessert}`,
    //         name: "Bruchetta",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis.",
    //     }
    // ]

  return (
    <div>
    <div className='main'>
        <div className="main-head">
        <h1>This Weeks Speacial!</h1>
        <a href="" className='btn'>Online Menu</a>
        </div>
        <div className='cards'>
        <Card
        img={bruchetta}
        name="Greek Salad"
        price="$12.99"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, perspiciatis."
        />
        </div>
    </div>
    </div>
  )
}

export default Main