import React from 'react'
import './test.css'
import ArrowButton from './components/Buttons/ArrowButton'
import CollapseButton from './components/Buttons/CollapseButton'
import CloseButton from './components/Buttons/CloseButton'

const App = () => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollX);
        window.scrollX = 1000;
    } )

    return (
    <>
        <ArrowButton id="leftArrowIcon" parentId="leftArrowParent"/>
        <div id="container">
            <header></header>
            <main></main>
            <footer></footer>
        </div>
        <ArrowButton id="rightArrowIcon" parentId="rightArrowParent"/>
    </>
    )
}

export default App
