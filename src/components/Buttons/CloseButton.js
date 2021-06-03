import React from 'react'
import { CgClose } from 'react-icons/cg'
import './CloseButton.css'

const CloseButton = () => {
    return (
        <div className="closeCon">
            <CgClose id="closeIcon" className="icons"/>
        </div>
    )
}

export default CloseButton
