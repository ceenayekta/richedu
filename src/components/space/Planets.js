import React from 'react'

import saturn from '../../images/saturn.png'
import jupiter from '../../images/jupiter.png'
import earth from '../../images/earth.png'
import moon from '../../images/moon.png'

import './Planet.css'


const Planets = ({ offsetX }) => {
    return (
        <>
            <img alt="" src={saturn} className="saturn" style={{transform: `translateX(${offsetX * -0.2}px)`}}/>
            <img alt="" src={jupiter} className="jupiter" style={{transform: `translateX(${offsetX * -0.2}px)`}}/>
            <img alt="" src={moon} className="moon" style={{transform: `translateX(${offsetX * -0.2}px)`}}/>
            <img alt="" src={earth} className="earth" style={{transform: `translateX(${offsetX * -0.2}px)`}}/>
        </>
    )
}

export default Planets
