import React from 'react'

import './Card.css'

import image from '../../images/boy.png'

const card = ({ title, text, offsetX }) => {
    return (
        <div className="d-flex justify-content-center align-items-center flex-row">
            <div>
                <h2 style={{ transform: `translateX(${offsetX * -0.4}px)` }}>Title</h2>
                <p style={{ transform: `translateX(${offsetX * -0.4}px)` }}>lkshf ;aksfh a;osifuoAWIFELAKJSGHF AGF AIWUFGAIWJFGdf iushgfklue </p>
            </div>
            <img alt="" src={image} width="600" height="400" style={{ transform: `translateX(${offsetX * -0.1}px)` }}/>
        </div>
    )
}

export default card
