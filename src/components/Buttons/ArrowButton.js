import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import './ArrowButton.css'
// import scrollByArrowBtns from '../../utilis/scrollByArrowBtns'

const ArrowButton = ({ id, parentId, activeBtn, setActiveBtn }) => {

    // const onHoldBtn = () => {
    //     scrollElement(5);
    // }

    // const scrollElement = (xCoord) => {
    //     console.log('Im in move function');
    //     var container = document.getElementById("container");
    //     container.style.left = `${xCoord}px`;
    //     container.ontransitionend = () => {
    //         xCoord += xCoord;
    //         console.log('transition end');
    //         if (activeBtn) scrollElement(xCoord);
    //     }
    // }

    // const onReleaseBtn = () => {
    //     if (activeBtn) setActiveBtn(false);
    // }

    return (
        <div 
            className="arrowCon" 
            id={parentId} 
            // onClick={() => {
            //     window.addEventListener("scroll", console.log('scrolling'));
            //     window.scroll({
            //         top: 0,
            //         left: window.scrollX + 1500,
            //         behavior: 'smooth'
            //     });
            //     console.log(window)
            // }}
            
            // onMouseDown={() => {setActiveBtn(true); onHoldBtn();}}
            // onMouseUp={onReleaseBtn}
        >
            <BsArrowLeft id={id} className="icons"/>
        </div>
    )
}

export default ArrowButton
