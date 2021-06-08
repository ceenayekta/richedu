import React, { useEffect, useState } from 'react'

import './test.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import data from './data/data.json'

import girlPic from './images/girl.png'
import shuttlePic from './images/shuttle.svg'
import worldPic from './images/connected_world.svg'

import ArrowButton from './components/Buttons/ArrowButton'
import Footer from './components/Footer/Footer'
import Tab from './components/Tabs/Tab'
import Card from './components/cards/Card'
import Space from './components/space/Space'

import { AiFillLinkedin, AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { FaPinterestSquare } from 'react-icons/fa'

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
        <Tab open={openContact} setOpen={setOpencontact} title={data.tabsContent.contact.title} text={data.tabsContent.contact.text}>
            <div className="d-flex flex-row">
                <a target="_blank" href="https://www.instagram.com/accounts/login/?next=/richeduu/">
                    <AiFillInstagram style={{
                        color: "#fff",
                        width: "40px",
                        height: "40px"
                    }}/>    
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/richedu/">
                    <AiFillLinkedin style={{
                        color: "#fff",
                        width: "40px",
                        height: "40px"
                    }}/>    
                </a>
                <a target="_blank" href="https://www.facebook.com/richeduu">
                    <AiFillFacebook style={{
                        color: "#fff",
                        width: "40px",
                        height: "40px"
                    }}/>    
                </a>
                <a target="_blank" href="https://www.pinterest.com/richeduu/_saved/">
                    <FaPinterestSquare style={{
                        color: "#fff",
                        width: "40px",
                        height: "40px"
                    }}/>    
                </a>
            </div>
        </Tab>
        <ArrowButton id="leftArrowIcon" parentId="leftArrowParent"/>
        <div id="container">
            {/* <header></header>
            <main></main>
            <footer></footer> */}

            <Space offsetX={offsetX} />
            <Card offsetX={offsetX} data={data.cardsContent}/>
        </div>
        <ArrowButton id="rightArrowIcon" parentId="rightArrowParent"/>
        <Footer team={setOpenTeam} about={setOpenAbout} contact={setOpencontact} data={data}/>
    </>
    )
}

export default App
