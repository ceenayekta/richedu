import stone from '../../images/stone.svg'
import astroid from '../../images/asteroid.svg'

import './Astroid.css'

import React from 'react'

const Astroid = ({ offsetX }) => {

    const layers = {
        one: {
            translateX: offsetX*-1,
            size: 50,
        },
        two: {
            translateX: offsetX*-2,
            size: 100,
        },
        three: {
            translateX: offsetX*-3,
            size: 150,
        },
        four: {
            translateX: offsetX*-4,
            size: 200,
        }
    }

    return (
        <>
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translateX(${layers.two.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translateX(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translateX(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translateX(${layers.two.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.three.size} height={layers.three.size} style={{transform: `translateX(${layers.three.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.two.size} height={layers.two.size} style={{transform: `translateX(${layers.two.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.three.size} height={layers.three.size} style={{transform: `translateX(${layers.three.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.three.size} height={layers.three.size} style={{transform: `translateX(${layers.three.translateX}px)`}}/>    
            <img alt="" src={stone} width={layers.two.size} height={layers.two.size} style={{transform: `translateX(${layers.two.translateX}px)`}}/>    
            <img alt="" src={astroid} width={layers.one.size} height={layers.one.size} style={{transform: `translateX(${layers.one.translateX}px)`}}/>    
        </>
    )
}


export default Astroid