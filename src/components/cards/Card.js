import React from 'react'

import './Card.css'

import image from '../../images/boy.png'

const card = ({ title, text, offsetX, data }) => {
    
    const cards = data.map((card, index) => 
        <div key={index} className="d-flex justify-content-center align-items-center flex-row">
            <div>
                <h2 style={{ transform: `translateX(${offsetX * -0.4}px)` }}>{card.title}</h2>
                <p style={{ transform: `translateX(${offsetX * -0.4}px)` }}>{card.text}</p>
            </div>
            <img alt="" src={image} width="600" height="400" style={{ transform: `translateX(${offsetX * -0.1}px)` }}/>
        </div>
    )

    return cards
}

export default card
