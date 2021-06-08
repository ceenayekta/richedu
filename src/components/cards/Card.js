import React from "react";

import "./Card.css";

import magical from "../../images/magical.png";
import member from "../../images/member.png";
import gamified from "../../images/gamified.png";
import mentor from "../../images/mentor.png";

const card = ({ speed, data }) => {
  const getImage = (imageName) => {
    switch (imageName) {
      case "magical":
        return magical;

      case "member":
        return member;

      case "gamified":
        return gamified;

      case "mentor":
        return mentor;

      default:
        break;
    }
  };

  const cards = data.map((card, index) => (
    <div
      key={index}
      className="card"
      style={{ transform: `translateX(${speed}px)` }}
    >
      <div className="content-wrapper">
        <h2>{card.title}</h2>
        <p className="mt-5">{card.text}</p>
      </div>
      <div>
        <img alt="" src={getImage(card.image)} />
      </div>
    </div>
  ));

  return cards;
};

export default card;
