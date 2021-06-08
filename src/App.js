import React, { useEffect, useState } from "react";

import "./test.css";
import "bootstrap/dist/css/bootstrap.min.css";

import data from "./data/data.json";

import ArrowButton from "./components/Buttons/ArrowButton";
import Footer from "./components/Footer/Footer";
import Tab from "./components/Tabs/Tab";
import Card from "./components/Cards/Card";
import Space from "./components/Space/Space";

import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";

import astroid from "./images/asteroid.svg";
import team from "./images/team.png";
import Richedu from "./components/Richedu/Richedu";

const App = () => {
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageXOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [openTeam, setOpenTeam] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Tab
        open={openTeam}
        setOpen={setOpenTeam}
        title={data.tabsContent.team.title}
        text={data.tabsContent.team.text}
      >
        <img alt="" src={team} width="250px" height="250px" />
      </Tab>
      <Tab
        open={openAbout}
        setOpen={setOpenAbout}
        title={data.tabsContent.about.title}
        text={data.tabsContent.about.text}
      >
        <img alt="" src={astroid} width="100px" height="100px" />
      </Tab>
      <Tab
        open={openContact}
        setOpen={setOpenContact}
        title={data.tabsContent.contact.title}
        text={data.tabsContent.contact.text}
      >
        <div className="d-flex flex-row">
          <a
            target="_blank"
            href="https://www.instagram.com/accounts/login/?next=/richeduu/"
          >
            <AiFillInstagram
              style={{
                color: "#fff",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/richedu/">
            <AiFillLinkedin
              style={{
                color: "#fff",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/richeduu">
            <AiFillFacebook
              style={{
                color: "#fff",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
          <a target="_blank" href="https://www.pinterest.com/richeduu/_saved/">
            <FaPinterestSquare
              style={{
                color: "#fff",
                width: "40px",
                height: "40px",
              }}
            />
          </a>
        </div>
      </Tab>
      <ArrowButton id="leftArrowIcon" parentId="leftArrowParent" move={-10} />
      <div id="container">
        <Space speed={offsetX * -1.5} />
        <Card speed={offsetX * -2} data={data.cardsContent} />
        <Richedu />
      </div>
      <div></div>
      <ArrowButton id="rightArrowIcon" parentId="rightArrowParent" move={10} />
      <Footer
        team={setOpenTeam}
        about={setOpenAbout}
        contact={setOpenContact}
        data={data}
      />
    </>
  );
};

export default App;
