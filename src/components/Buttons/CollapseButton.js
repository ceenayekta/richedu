import React from 'react'
import { BsChevronDoubleUp } from 'react-icons/bs'
import './CollapseButton.css'

const CollapseButton = () => {
    return (
        <div className="collapseCon">
            <BsChevronDoubleUp id="collapseIcon" className="icons"/>
        </div>
    )
}

export default CollapseButton
