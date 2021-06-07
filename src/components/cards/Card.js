import React from 'react'

import './Card.css'

import magical from '../../images/magical.png'
import member from '../../images/member.png'
import gamified from '../../images/gamified.png'
import mentor from '../../images/mentor.png'

const card = ({ title, text, offsetX, data }) => {

    const getImage = (imageName) => {
        switch (imageName) {
            case "magical":
                return magical;
        
            case "member":
                return member;
    
            case "gamified":
                return gamified;
            
            case "mentor":
                return mentor;
        
            default:
                break;
        }
    }
    
    const cards = data.map((card, index) => 
        <div key={index} className="card">
            <div className="content-wrapper">
                <h2 style={{ transform: `translateX(${offsetX * -0.4}px)` }}>{card.title}</h2>
                <p className="mt-5" style={{ transform: `translateX(${offsetX * -0.4}px)` }}>{card.text}</p>
            </div>
            <div className="card-img">
                <img alt="" src={getImage(card.image)} style={{ transform: `translateX(${offsetX * -0.35}px)` }}/>
            </div>
        </div>
    )

    return cards
}

export default card
