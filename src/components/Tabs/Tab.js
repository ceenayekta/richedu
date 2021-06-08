import React from 'react'
import CloseButton from '../Buttons/CloseButton'
import './Tab.css'

const Tabs = ({ title, text, tabStyles, containerStyles, open, setOpen, children }) => {
    
    const animation = open ? "appear" : "disappear";


    return (
        <div className={`tab ${animation}`} style={tabStyles}>
            <div className="tabContainer" style={containerStyles}>
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="text">{text}</p>
                        {children}
                    </div>
                    <CloseButton onClick={() => setOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Tabs
