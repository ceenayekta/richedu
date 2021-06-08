import React from 'react'

const scrollByArrowBtns = () => {

    const scrollFunc = () => {
        var time = null;
        const frame = () => {
            if (xCoord === 350) {
            clearInterval(time);
            } else {
            xCoord++; 
            container.scrollLeft = xCoord; 
            }
        }
    var container = document.getElementById("container"),
    //later: change xCoord based on element className layers
    xCoord = 0;
    clearInterval(time);
    time = setInterval(frame, 5);
    
    }
    return (
        <div>
            
        </div>
    )
}

export default scrollByArrowBtns
