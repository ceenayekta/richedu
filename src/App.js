import React, { useEffect, useState } from 'react'
import './test.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import girlPic from './images/girl.png'
import boyPic from './images/gamified.png'
import shuttlePic from './images/Shuttle.svg'
import worldPic from './images/connected_world.svg'
import stone from './images/stone.svg'
import astroidPic from './images/asteroid.svg'
import earth from './images/earth.svg'
import moon from './images/moon.svg'
import saturn from './images/saturn.svg'
import jupiter from './images/jupiter.svg'

import ArrowButton from './components/Buttons/ArrowButton'
import Footer from './components/Footer/Footer'
import Tab from './components/Tabs/Tab'

import data from './data/data.json'
import Card from './components/cards/Card'
import Space from './components/space/Space'

const App = () => {

    const [offsetX, setOffsetX] = useState(0);
    const handleScroll = () => setOffsetX(window.pageXOffset);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const [openTeam, setOpenTeam] = useState(false);
    const [openAbout, setOpenAbout] = useState(false);
    const [openContact, setOpencontact] = useState(false);
    

    return (
    <>
        <Tab open={openTeam} setOpen={setOpenTeam} title={data.tabsContent.team.title} text={data.tabsContent.team.text}/>
        <Tab open={openAbout} setOpen={setOpenAbout} title={data.tabsContent.about.title} text={data.tabsContent.about.text}/>
        <Tab open={openContact} setOpen={setOpencontact} title={data.tabsContent.contact.title} text={data.tabsContent.contact.text}/>
        <ArrowButton id="leftArrowIcon" parentId="leftArrowParent"/>
        <div id="container">
            {/* <header></header>
            <main></main>
            <footer></footer> */}

            <Card offsetX={offsetX} data={data.cardsContent}/>
            {/* <Space offsetX={offsetX} /> */}
        </div>
        <ArrowButton id="rightArrowIcon" parentId="rightArrowParent"/>
        <Footer team={setOpenTeam} about={setOpenAbout} contact={setOpencontact} data={data}/>
    </>
    )
}

export default App
