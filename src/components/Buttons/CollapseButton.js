import React, { useState } from 'react'
import { BsChevronDoubleUp } from 'react-icons/bs'
import './CollapseButton.css'

const CollapseButton = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const style = collapsed ? "collapsed" : "";

    return (
        <div className={`collapseCon ${style}`} onClick={() => {setCollapsed(!collapsed)}}>
            <BsChevronDoubleUp id="collapseIcon" className={`${className} icons`}/>
        </div>
    )
}

export default CollapseButton
