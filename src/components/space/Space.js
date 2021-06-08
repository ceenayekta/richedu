import React from "react";

import saturn from "../../images/saturn.png";
import jupiter from "../../images/jupiter.png";
import earth from "../../images/earth.png";
import moon from "../../images/moon.png";

import "./Space.css";

const Space = ({ speed }) => {
  return (
    <div className="w-100 position-absolute">
      <img
        alt=""
        src={saturn}
        className="saturn"
        style={{ transform: `translateX(${speed}px)` }}
      />
      <img
        alt=""
        src={jupiter}
        className="jupiter"
        style={{ transform: `translateX(${speed}px)` }}
      />
      <img
        alt=""
        src={moon}
        className="moon"
        style={{ transform: `translateX(${speed}px)` }}
      />
      <img
        alt=""
        src={earth}
        className="earth"
        style={{ transform: `translateX(${speed}px)` }}
      />
    </div>
  );
};

export default Space;
