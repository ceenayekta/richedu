import React from 'react'
import { CgClose } from 'react-icons/cg'
import './CloseButton.css'

const CloseButton = ({ onClick, className }) => {
    return (
        <div className={`closeCon ${className}`} onClick={onClick}>
            <CgClose id="closeIcon" className={`${className} icons`}/>
        </div>
    )
}

export default CloseButton
