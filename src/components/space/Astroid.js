import stone from '../../images/stone.svg'
import astroid from '../../images/asteroid.svg'

import './Astroid.css'

import React from 'react'

const Astroid = ({ offsetX }) => {

    const layers = {
        one: {
            translateX: offsetX*-1,
            size: 100,
        },
        two: {
            translateX: offsetX*-2,
            size: 200,
        },
        three: {
            translateX: offsetX*-3,
            size: 300,
        },
        four: {
            translateX: offsetX*-4,
            size: 400,
        }
    }

    return (
        <>
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translate(${layers.two.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translate(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translate(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translate(${layers.two.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.three.size} height={layers.three.size} style={{transform: `translate(${layers.three.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translate(${layers.two.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.three.size} height={layers.three.size} style={{transform: `translate(${layers.three.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translate(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.two.size} height={layers.two.size} style={{transform: `translate(${layers.two.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translate(${layers.one.translateX}px)`}}/>    
        </>
    )
}


export default Astroid