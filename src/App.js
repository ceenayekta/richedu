import React, { useEffect, useState } from 'react'
import './test.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import girlPic from './images/girl.png'
import boyPic from './images/boy.png'
import shuttlePic from './images/Shuttle.svg'
import worldPic from './images/connected_world.svg'
import rockPic from './images/rock.svg'
import astroidPic from './images/asteroid.svg'
import earth from './images/earth.svg'
import moon from './images/moon.svg'
import saturn from './images/saturn.svg'
import jupiter from './images/jupiter.svg'

import ArrowButton from './components/Buttons/ArrowButton'
import CloseButton from './components/Buttons/CloseButton'
import { Button } from 'bootstrap'
import Footer from './components/footer/Footer';
import { Nav, Navbar } from 'react-bootstrap'

const App = () => {

    const [offsetX, setOffsetX] = useState(0);
    const handleScroll = () => setOffsetX(window.pageXOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    

    return (
    <>
        <ArrowButton id="leftArrowIcon" parentId="leftArrowParent"/>
        <div id="container">
            <header></header>
            <main></main>
            <footer></footer>
        </div>
        <ArrowButton id="rightArrowIcon" parentId="rightArrowParent"/>
            <Footer />
    </>
    )
}

export default App
