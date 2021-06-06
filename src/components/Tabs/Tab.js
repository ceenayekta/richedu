import React from 'react'
import CloseButton from '../Buttons/CloseButton'
import './Tab.css'
import image from '../../images/girl.png'

const Tabs = ({ title, text, picture, tabStyles, containerStyles, open, setOpen }) => {
    
    const display = open ? "visible opacity-5" : "invisible opacity-0";

    return (
        <div className={`tab ${display}`} style={tabStyles}>
            <div className="tabContainer" style={containerStyles}>
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p className="text">{text}</p>
                        <img alt="string" width="200px" height="150px" src={image}/>
                    </div>
                    <CloseButton className={display} onClick={() => setOpen(false)}/>
                </div>
            </div>
        </div>
    )
}

export default Tabs
