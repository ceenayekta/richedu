import React from 'react'
import './test.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ArrowButton from './components/Buttons/ArrowButton'
import CloseButton from './components/Buttons/CloseButton'

import { Button } from 'bootstrap'
import Footer from './components/footer/Footer';
import { Nav, Navbar } from 'react-bootstrap'

const App = () => {

    return (
    <>
        {/* <ArrowButton id="leftArrowIcon" parentId="leftArrowParent"/>
        <div id="container">
            <header></header>
            <main></main>
            <footer></footer>
        </div>
        <ArrowButton id="rightArrowIcon" parentId="rightArrowParent"/> */}
            <Footer />
    </>
    )
}

export default App
