import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import './ArrowButton.css'

const ArrowButton = ({ id, parentId }) => {
    return (
        <div className="arrowCon" id={parentId}>
            <BsArrowLeft id={id} className="icons"/>
        </div>
    )
}

export default ArrowButton
